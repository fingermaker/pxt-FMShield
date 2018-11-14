// Auto-generated. Do not edit.



    //% weight=2 color=#0050BB icon="\uf1b9"
declare namespace FMShield {

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=13
    //% blockGap=8
    //% blockId=sensor_ev3GyroSensor block="EV3 陀螺仪|%m|模式|%mode" shim=FMShield::ev3UartSensor
    function ev3UartSensor(s: uint8, mode: uint8): int32;

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=16
    //% blockGap=8
    //% blockId=sensor_nxtLightSensor block="NXT 光电|%s" shim=FMShield::nxtLightSensor
    function nxtLightSensor(s: uint8): int32;

    /**
     * TODO: 在此处描述您的函数
     * @param m 在此处描述参数,
     * @param t 在此处描述参数, 
     * @param p 在此处描述参数
     */
    //% weight=25
    //% blockGap=8
    //% blockId=motor_motorReadPosition block="读取电机码盘数|%m" shim=FMShield::motorReadPosition
    function motorReadPosition(m: uint8): int32;
}

// Auto-generated. Do not edit. Really.
