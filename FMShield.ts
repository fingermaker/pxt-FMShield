
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
    
    
    
    
}

