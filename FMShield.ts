
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
 */
enum Ev3Sensor {
    //% block=S2
    S2 = 1,
    //% block=S3
    S3 = 2,
    //% block=S4
    S4 = 3,
    //% block=S5
    S5 = 4,
    //% block=S6
    S6 = 5
}

enum LegoSensor {
    //% block=S1
    S1 = 0,
    //% block=S2
    S2 = 1,
    //% block=S3
    S3 = 2,
    //% block=S4
    S4 = 3,
    //% block=S5
    S5 = 4,
    //% block=S6
    S6 = 5
}

enum Ev3UltrasonicSensorMode {
    //% block=
    Centimeters = 0,
    //% block=Inches
    Inches = 1,
    //% block=
    Listen = 2
}

enum LegoLightSensorMode {
    //% block=
    Centimeters = 0,
    //% block=Inches
    Inches = 1,
    //% block=
    Listen = 2
}

enum Ev3ColorSensorMode {
    //% block=COL_REFLECT
    COL_REFLECT = 0,
    //% block=COL_AMBIENT
    COL_AMBIENT = 1,
    //% block=COL_COLOR
    COL_COLOR = 2,
    //% block= REF_RAW
    REF_RAW = 3,
    //% block=RGB_RAW
    RGB_RAW = 4,
    //% block=COL_CAL
    COL_CAL = 5
}

enum Ev3GyroSensorMode {
    //% block=Angle
    Angle = 0,
    //% block=Inches
    Rate = 1,
    //% block=Fast
    Fast = 2
}

enum FMSensor {
    //% block=S1
    S1 = 0,
    //% block=S2
    S2 = 1,
    //% block=S3
    S3 = 2,
    //% block=S4
    S4 = 3,
    //% block=S5
    S5 = 4,
    //% block=S6
    S6 = 5
}



enum FMMotorType {
    //% block=FM25
    FM25 = 0,
    //% block=LEGO
    LEGO = 1
}
enum FMPowerType {

    //% block=POWER_9V
    POWER_9V = 0,
    //% block=POWER_12V
    POWER_12V = 1
}
enum FMMotorSN {

    //% block=M1
    M1 = 0,
    //% block=M2
    M2 = 1,
    //% block=M3
    M3 = 2,
    //% block=M4
    M4 = 3
}
enum FMMotorMode {

    //% block=COAST 
    COAST = 0,
    //% block=BRAKE
    BRAKE = 1,
    //% block=FIXED_DRIVE
    FIXED_DRIVE = 2,
    //% block=PID_POSITION
    PID_POSITION = 3,
    //% block=PID_SPEED
    PID_SPEED = 4
}
/**
 * 自定义图形块
 */
//% weight=2 color=#0050BB icon="\uf1b9"
namespace FMShield {
    let cmd: number[] = [];
    let rcv: number[] = [];

    /**
     * Help goes here.
     */
    //% shim=FMShield::extfun
    export function extfun(x: number, y: number) {
        // Dummy implementation for the simulator.
        return x - y
    }

    export function cmdSend(): void {
        // Add code here
        let i: number = 0;
        pins.spiFormat(8, 0);
        pins.digitalWritePin(DigitalPin.P16, 0);
        for (i = 0; i < 128; i++) {
            rcv[i] = pins.spiWrite(cmd[i]);
        }
        //sendCmdRevInf(16);
        pins.digitalWritePin(DigitalPin.P16, 1);
    }
    
    //% shim=FMShield::sendCmdRevInf
    export function sendCmdRevInf(size:number):void{
        return;
    }

    /**
        * TODO: 在此处描述您的函数
        * @param m 在此处描述参数,
        * @param t 在此处描述参数, 
        * @param p 在此处描述参数
        */
    //% weight=16
    //% blockId=sensor_legoLightSensor block="lego light|%s"
    //% shim=FMShield::legoLightSensor


    export function sensor_legoLightSensor(s: LegoSensor): number {
        return;
    }


    /**
        * TODO: 在此处描述您的函数
        * @param m 在此处描述参数,
        * @param t 在此处描述参数, 
        * @param p 在此处描述参数
        */
    //% weight=15
    //% blockId=sensor_ev3UltrasonicSensor block="Ev3 Ultrasonic|%s|mode|%mode"
    //% shim=FMShield::ev3UartSensor


    export function sensor_ev3UltrasonicSensor(s: Ev3Sensor, mode: Ev3UltrasonicSensorMode): number {
        return;
    }
    /**
    * TODO: 在此处描述您的函数
    * @param m 在此处描述参数,
    * @param t 在此处描述参数, 
    * @param p 在此处描述参数
    */
    //% weight=14
    //% blockId=sensor_ev3ColorSensor block="Ev3 color|%m|mode|%mode"
    //% shim=FMShield::ev3UartSensor

    export function ev3ColorSensor(m: Ev3Sensor, mode: Ev3ColorSensorMode): number {
        return;
    }

    /**
    * TODO: 在此处描述您的函数
    * @param m 在此处描述参数,
    * @param t 在此处描述参数, 
    * @param p 在此处描述参数
    */
    //% weight=13
    //% blockId=sensor_ev3GyroSensor block="Ev3 gyro|%m|mode|%mode"
    //% shim=FMShield::ev3UartSensor

    export function ev3GyroSensor(m: Ev3Sensor, mode: Ev3GyroSensorMode): number {
        return;
    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=50
    //% blockId=motor_setMotor block="Set motor|%m|type|%t|Power|%p"
    export function setMotor(m: FMMotorSN, t: FMMotorType, p: FMPowerType): void {
        // Add code here
        let startN: number = 24; //8byte
        let mm: number;

        let _mode: number = cmd[startN + m * 16];
        mm = _mode & 0x3f;

        cmd[startN + m * 16] = mm + t * 128 + p * 64;
        cmd[startN + m * 16] = 2;
    }

    export function setMotorMode(m: FMMotorSN, mode: FMMotorMode): void {
        // Add code here
        let startN: number = 24; //8byte
        let mm: number;
        mm = cmd[startN + m * 16] & 0xc0;
        cmd[startN + m * 16] = mode | mm;
    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=48
    //% blockId=motor_setMotorInversion block="Set motor inversion|%m"
    export function setMotorInversion(m: FMMotorSN): void {
        // Add code here
        let startN: number = 25; //8byte
        cmd[startN + m * 16] = 1;
    }

    /**
         * TODO: 在此处描述您的函数
         * @param m 在此处描述参数,
         * @param t 在此处描述参数, 
         * @param p 在此处描述参数
         */
    //% weight=30
    //% blockId=motor_motorRun block="Motor run|%m|speed|%speed"
    //% speed.min=-100 speed.max=100

    export function motorRun(m: FMMotorSN, speed: number): void {
        // Add code here
        let startN: number = 28; //8byte
        let mm: number;
        setMotorMode(m, FMMotorMode.FIXED_DRIVE);
        speed = speed * 20;
        if (speed > 2000) {
            speed = 2000;
        }
        if (speed < -2000) {
            speed = -2000;
        }
        cmd[startN + m * 16] = speed % 255;
        cmd[startN + 1 + m * 16] = speed >> 8;
        cmdSend();

    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=29
    //% blockId=motor_motorFineRun block="Motor fine run|%m|speed|%speed"
    //% speed.min=-2000 speed.max=2000

    export function motorFineRun(m: FMMotorSN, speed: number): void {
        // Add code here
        let startN: number = 28; //8byte
        let mm: number;
        setMotorMode(m, FMMotorMode.FIXED_DRIVE);
        if (speed > 2000) {
            speed = 2000;
        }
        if (speed < -2000) {
            speed = -2000;
        }
        cmd[startN + m * 16] = speed % 255;
        cmd[startN + 1 + m * 16] = speed >> 8;
        cmdSend();

    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=28
    //% blockId=motor_motorConstantRun block="Motor Constant run|%m|speed|%speed"
    //% speed.min=-100 speed.max=100

    export function motorConstantRun(m: FMMotorSN, speed: number): void {
        // Add code here
        let startN: number = 28; //8byte
        let mm: number;
        setMotorMode(m, FMMotorMode.PID_SPEED);
        if (speed > 100) {
            speed = 100;
        }
        if (speed < -100) {
            speed = -100;
        }
        cmd[startN + m * 16] = speed % 255;
        cmd[startN + 1 + m * 16] = speed >> 8;
        cmdSend();

    }
    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=27
    //% blockId=motor_motorRunPosition block="Motor run|%m|speed|%speed|position|%position"
    //% speed.min=-100 speed.max=100

    export function motorRunPosition(m: FMMotorSN, speed: number, position: number): void {
        // Add code here
        let startN: number = 28; //8byte
        let mm: number;
        let p: number = motorReadPosition(m);
        setMotorMode(m, FMMotorMode.PID_POSITION);
        if (speed > 100) {
            speed = 100;
        }
        if (speed < -100) {
            speed = -100;
        }
        cmd[startN + m * 16] = speed % 255;
        cmd[startN + 1 + m * 16] = speed >> 8;
        position = position + p;
        cmd[startN + 4 + m * 16] = position % 255;
        cmd[startN + 4 + 1 + m * 16] = (position >> 8) % 255;
        cmd[startN + 4 + 2 + m * 16] = (position >> 16) % 255;
        cmd[startN + 4 + 3 + m * 16] = (position >> 24) % 255;

        cmdSend();

    }
    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=25
    //% blockId=motor_motorReadPosition block="Motor read position|%m"


    export function motorReadPosition(m: FMMotorSN): number {
        // Add code here
        let startN: number = 76; //8byte
        let mm: number;
        cmdSend();
        mm = rcv[startN + m * 12]
            + rcv[startN + 1 + m * 12] * 256
            + rcv[startN + 2 + m * 12] * 256 * 256
            + rcv[startN + 3 + m * 12] * 256 * 256 * 256;
        return mm;
    }
}

