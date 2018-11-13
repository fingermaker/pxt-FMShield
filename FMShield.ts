
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

enum NxtSensor {
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
    //% block=厘米
    Centimeters = 0,
    //% block=英寸
    Inches = 1,
    //% block=监听
    Listen = 2
}

enum NxtLightSensorMode {
    //% block=反射光
    Reflected = 0,
    //% block=环境光
    Ambient = 1
    
}

enum Ev3ColorSensorMode {
    //% block=反射光
    COL_REFLECT = 0,
    //% block=环境光
    COL_AMBIENT = 1,
    //% block=颜色
    COL_COLOR = 2,
    //% block=反射光原始值
    COL_REF_RAW = 3,
    //% block=RGB原始值
    COL_RGB_RAW = 4,
    //% block=校准
    COL_CAL = 5
}

enum Ev3GyroSensorMode {
    //% block=角度
    Angle = 0,
    //% block=角速度
    Rate = 1,
    //% block=快速
    Fast = 2,
    //% block=校准
    Calibration = 4
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

    //% block=9V
    POWER_9V = 0,
    //% block=12V
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
    
    
    /**
        * TODO: 在此处描述您的函数
        * @param m 在此处描述参数,
        * @param t 在此处描述参数, 
        * @param p 在此处描述参数
        */
    //% weight=16
    //% blockGap=8
    //% blockId=sensor_nxtLightSensor block="NXT 光电|%s"
    //% shim=FMShield::nxtLightSensor


    export function sensor_nxtLightSensor(s: NxtSensor): number {
        return;
    }


    /**
        * TODO: 在此处描述您的函数
        * @param m 在此处描述参数,
        * @param t 在此处描述参数, 
        * @param p 在此处描述参数
        */ 
    //% weight=15
    //% blockGap=8
    //% blockId=sensor_ev3UltrasonicSensor block="EV3 超声波|%s|模式|%mode"
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
    //% blockGap=8
    //% blockId=sensor_ev3ColorSensor block="EV3 颜色|%m|模式|%mode"
    //% shim=FMShield::ev3UartSensor

    export function sensor_ev3ColorSensor(m: Ev3Sensor, mode: Ev3ColorSensorMode): number {
        return;
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

    export function sensor_ev3GyroSensor(m: Ev3Sensor, mode: Ev3GyroSensorMode): number {
        return;
    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t motor type; eg: FMMotorType.LEGO
     * @param p 在此处描述参数
     */
    //% weight=50
    //% blockGap=8
    //% blockId=motor_setMotor block="设置电机|%m|类型|%t|电源|%p"
    //% shim=FMShield::setMotor
    export function motor_setMotor(m: FMMotorSN, t: FMMotorType, p: FMPowerType): void {
        // Add code here
        return;
    }

    

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=48
    //% blockGap=8
    //% blockId=motor_setMotorInversion block="设置电机反转|%m"
    //% shim=FMShield::setMotorInversion
    export function motor_setMotorInversion(m: FMMotorSN): void {
        return;
    }

    /**
         * TODO: 在此处描述您的函数
         * @param m 在此处描述参数,
         * @param t 在此处描述参数, 
         * @param p 在此处描述参数
         */
    //% weight=30
    //% blockGap=8
    //% blockId=motor_motorRun block="电机运行|%m|速度|%speed"
    //% speed.min=-100 speed.max=100
    //% shim=FMShield::motorRun
    export function motor_motorRun(m: FMMotorSN, speed: number): void {
        // Add code here
        return;
    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=29
    //% blockGap=8
    //% blockId=motor_motorFineRun block="电机高精度运行|%m|速度|%speed"
    //% speed.min=-2000 speed.max=2000
    //% shim=FMShield::motorFineRun
    export function motor_motorFineRun(m: FMMotorSN, speed: number): void {
        // Add code here
        return;
    }

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=28
    //% blockGap=8
    //% blockId=motor_motorConstantRun block="电机恒速运行|%m|速度|%speed"
    //% speed.min=-100 speed.max=100
    //% shim=FMShield::motorConstantRun
    export function motor_motorConstantRun(m: FMMotorSN, speed: number): void {
        return;
    }
    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=26
    //% blockGap=8
    //% blockId=motor_motorGoToPosition block="电机运行到|%m|速度|%speed|码盘数|%position"
    //% speed.min=-100 speed.max=100
    //% shim=FMShield::motorGoToPosition
    export function motor_motorGoToPosition(m: FMMotorSN, speed: number, position: number): void {
        return;
    }

/**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=27
    //% blockGap=8
    //% blockId=motor_motorRunPosition block="电机运行|%m|速度|%speed|码盘数|%position"
    //% speed.min=-100 speed.max=100
    //% shim=FMShield::motorRunPosition
    export function motor_motorRunPosition(m: FMMotorSN, speed: number, position: number): void {
        return;
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
    //% shim=FMShield::motorReadPosition
    export function motor_motorReadPosition(m: FMMotorSN): number {
       
        return ;
    }
}

