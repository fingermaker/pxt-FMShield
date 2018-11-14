#include "pxt.h"
#include "MicroBitPin.h"
#include "mbed.h"

#include "FMShield.h"
using namespace pxt;
r revInf;
s sendCmd;
SPI fmShield_spi(MOSI, MISO, SCK);
#define fmShield_SPI_Write_Byte(value) fmShield_spi.write(value)
DigitalOut NSS(MICROBIT_PIN_P16);
//% weight=2 color=#0050BB icon="\uf1b9"

namespace FMShield
{
//%
void sendCmdRevInf(uint8_t size)
{
    uint8_t i;
    //uint8_t size=128;
    fmShield_spi.format(8, 0);
    fmShield_spi.frequency(1000000);
    NSS = 0;

    for (i = 0; i < size; i++)
    {
        revInf.cInf[i] = fmShield_SPI_Write_Byte(sendCmd.cSend[i]);
    }
    NSS = 1;
}

/**
    * TODO: 在此处描述您的函数
    * @param m 在此处描述参数,
    * @param t 在此处描述参数, 
    * @param p 在此处描述参数
    */
    //% weight=13
    //% blockGap=8
    //% blockId=sensor_ev3GyroSensor block="EV3 陀螺仪|%m|模式|%mode"
    //% shim=FMShield::ev3UartSensor
int ev3UartSensor(uint8_t s, uint8_t mode)
{
    // Add code here
    //uint8_t startN = 4; //8byte
    float mm;
    //int intMm;
    sendCmd.cSend[0 + s * 4] = 1;
    sendCmd.cSend[2 + s * 4] = mode;
    sendCmdRevInf(128);
    switch (s)
    {
    case 0:
        mm = revInf.inf.s1.Actual;
        break;
    case 1:
        mm = revInf.inf.s2.Actual;
        break;
    case 2:
        mm = revInf.inf.s3.Actual;
        break;
    case 3:
        mm = revInf.inf.s4.Actual;
        break;
    case 4:
        mm = revInf.inf.s5.Actual;
        break;
    case 5:
        mm = revInf.inf.s6.Actual;
        break;
    }

    return int(mm);
}

/**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=16
    //% blockGap=8
    //% blockId=sensor_nxtLightSensor block="NXT 光电|%s"
    
int nxtLightSensor(uint8_t s)
{
    // Add code here
    //uint8_t startN = 4; //8byte

    int intMm;
    //sendCmd.cSend[0 + s * 4] = 1;
    //sendCmd.cSend[2 + s * 4] = mode;
    sendCmdRevInf(128);
    switch (s)
    {
    case 0:
        intMm = revInf.inf.adc.s1_ANA;
        break;
    case 1:
        intMm = revInf.inf.adc.s2_ANA;
        break;
    case 2:
        intMm = revInf.inf.adc.s3_ANA;
        break;
    case 3:
        intMm = revInf.inf.adc.s4_ANA;
        break;
    case 4:
        intMm = revInf.inf.adc.s5_ANA;
        break;
    case 5:
        intMm = revInf.inf.adc.s6_ANA;
        break;
    }

    return intMm;
}
//%
void setMotor(uint8_t m, uint8_t t, uint8_t p)
{
    // Add code here
    uint8_t startN = 24; // let startN : number = 24; //8byte
    uint8_t mm;          //let mm: number;

    uint8_t _mode = sendCmd.cSend[startN + m * 16]; //let _mode: number = cmd[sendCmd];
    mm = _mode & 0x3f;

    sendCmd.cSend[startN + m * 16] = mm + t * 128 + p * 64;
    //sendCmd.cSend[startN + m * 16] = 2;
}
//%
void setMotorMode(uint8_t m, uint8_t mode)
{
    // Add code here
    uint8_t startN = 24; //let startN: number = 24; //8byte
    uint8_t mm;          //    let mm : number;
    mm = sendCmd.cSend[startN + m * 16] & 0xc0;
    sendCmd.cSend[startN + m * 16] = mode | mm;
}
//%
void setMotorInversion(uint8_t m)
{
    // Add code here
    uint8_t startN = 25; //let startN : number = 25; //8byte
    sendCmd.cSend[startN + m * 16] = 1;
}
//%
void motorRun(uint8_t m, int speed)
{
    // Add code here
    uint8_t startN = 28; //let startN: number = 28; //8byte

    setMotorMode(m, MOTOR_FIXED_DRIVE);
    speed = speed * 20;
    if (speed > 2000)
    {
        speed = 2000;
    }
    if (speed < -2000)
    {
        speed = -2000;
    }
    sendCmd.cSend[startN + m * 16] = speed % 255;
    sendCmd.cSend[startN + 1 + m * 16] = speed >> 8;
    sendCmdRevInf(128);
}
//%
void motorFineRun(uint8_t m, int speed)
{
    // Add code here
    uint8_t startN = 28; //let startN: number = 28; //8byte

    setMotorMode(m, MOTOR_FIXED_DRIVE);
    if (speed > 2000)
    {
        speed = 2000;
    }
    if (speed < -2000)
    {
        speed = -2000;
    }
    sendCmd.cSend[startN + m * 16] = speed % 255;
    sendCmd.cSend[startN + 1 + m * 16] = speed >> 8;
    sendCmdRevInf(128);
}
//%
void motorConstantRun(uint8_t m, int speed)
{
    // Add code here
    uint8_t startN = 28; //let startN: number = 28; //8byte

    setMotorMode(m, MOTOR_PID_SPEED);
    if (speed > 100)
    {
        speed = 100;
    }
    if (speed < -100)
    {
        speed = -100;
    }
    sendCmd.cSend[startN + m * 16] = speed % 255;
    sendCmd.cSend[startN + 1 + m * 16] = speed >> 8;
    sendCmdRevInf(128);
}
/**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=25
    //% blockGap=8
    //% blockId=motor_motorReadPosition block="读取电机码盘数|%m"
    
int32_t motorReadPosition(uint8_t m)
{
    // Add code here
    uint8_t startN = 76; //let startN: number = 76; //8byte
    long mm;             //let mm: number;
    sendCmdRevInf(128);
    mm = revInf.cInf[startN + m * 12] + revInf.cInf[startN + 1 + m * 12] * 256 + revInf.cInf[startN + 2 + m * 12] * 256 * 256 + revInf.cInf[startN + 3 + m * 12] * 256 * 256 * 256;
    return mm;
}
//%
void motorRunPosition(uint8_t m, int speed, long position)
{
    // Add code here
    uint8_t startN = 28; //let startN: number = 28; //8byte

    long p = motorReadPosition(m); //let p: number = motorReadPosition(m);
    setMotorMode(m, MOTOR_PID_POSITION);
    if (speed > 100)
    {
        speed = 100;
    }
    if (speed < -100)
    {
        speed = -100;
    }
    sendCmd.cSend[startN + m * 16] = speed % 255;
    sendCmd.cSend[startN + 1 + m * 16] = speed >> 8;
    position = position + p;
    sendCmd.cSend[startN + 4 + m * 16] = position % 255;
    sendCmd.cSend[startN + 4 + 1 + m * 16] = (position >> 8) % 255;
    sendCmd.cSend[startN + 4 + 2 + m * 16] = (position >> 16) % 255;
    sendCmd.cSend[startN + 4 + 3 + m * 16] = (position >> 24) % 255;

    sendCmdRevInf(128);
}
//%
void motorGoToPosition(uint8_t m, int speed, int32_t position)
{
    uint8_t startN = 28; //let startN: number = 28; //8byte
    setMotorMode(m, MOTOR_PID_POSITION);
    if (speed > 100)
        speed = 100;
    if (speed < -100)
        speed = -100;

    sendCmd.cSend[startN + m * 16] = speed % 255;
    sendCmd.cSend[startN + 1 + m * 16] = speed >> 8;
    sendCmd.cSend[startN + 4 + m * 16] = position % 255;
    sendCmd.cSend[startN + 4 + 1 + m * 16] = (position >> 8) % 255;
    sendCmd.cSend[startN + 4 + 2 + m * 16] = (position >> 16) % 255;
    sendCmd.cSend[startN + 4 + 3 + m * 16] = (position >> 24) % 255;
    sendCmdRevInf(128);
}

} // namespace FMShield
