//#include "pxt.h"
//using namespace pxt;


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
    int extfun(int x, int y)
    {
        return x + y;
    }

    //%
    void sendCmdRevInf(uint8_t size)
    {
        uint8_t i;
        //uint8_t size=128;
        fmShield_spi.format(8, 0);
        fmShield_spi.frequency(1000000);
        NSS = 0;

        /*for (i = 0; i < size; i++)
        {
        sendCmd.cSend[i]=i;
        }*/
        for (i = 0; i < size; i++)
        {
            revInf.cInf[i] = fmShield_SPI_Write_Byte(sendCmd.cSend[i]);
        }
        NSS = 1;
    }

   
    //% 
    int ev3UltrasonicSensor(uint8_t s, uint8_t mode)
    {
        // Add code here
        //uint8_t startN = 4; //8byte
        float mm;
        int intMm;
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
        intMm = int(mm);
        return intMm;
        
    }

    //%
    int ev3UartSensor(uint8_t s, uint8_t mode)
    {
        // Add code here
        //uint8_t startN = 4; //8byte
        float mm;
        int intMm;
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
        intMm = int(mm);
        return intMm;
    }
} // namespace FMShield
