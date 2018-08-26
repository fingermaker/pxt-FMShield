
#ifndef _FMSHIELD_H
#define _FMSHIELD_H

typedef   struct{
  uint8_t portActivate;
    uint8_t sensorType;
    uint8_t mode;
     uint8_t uk;
}ev3SensorSet;
typedef   struct{
    uint8_t sensorType;
    uint8_t mode;
    float Actual;   
}ev3SensorRev;
typedef   struct{
  uint8_t mode;
  uint8_t inversion;
  int motorSpeed;
  long encode;
  long encodeWrite;
}motorSet;
typedef   struct{
	uint8_t angle; 
}servoSet;
typedef   struct{
  uint8_t mode;
  uint8_t inversion;
  long encode;
  uint8_t motorRunResult;    
}motorRev;
typedef   struct{
   ev3SensorSet s1;
   ev3SensorSet s2;
   ev3SensorSet s3;
   ev3SensorSet s4;
   ev3SensorSet s5;
   ev3SensorSet s6;
   motorSet m1;
   motorSet m2;
   motorSet m3;
   motorSet m4;
   servoSet servo1;
	 servoSet servo2;
	 servoSet servo3;
	 servoSet servo4;
}SET;
typedef   struct{
    uint16_t s1_ANA;
    uint16_t s2_ANA;
    uint16_t s3_ANA;
    uint16_t s4_ANA;
    uint16_t s5_ANA;
    uint16_t s6_ANA;
    uint16_t s1_DB;
    uint16_t s2_DB;
    uint16_t s3_DB;
    uint16_t s4_DB; 
    uint16_t s5_DB;
    uint16_t s6_DB;    
}adcRev;
typedef   struct{
   ev3SensorRev s1;
   ev3SensorRev s2;
   ev3SensorRev s3;
   ev3SensorRev s4;
   ev3SensorRev s5;
   ev3SensorRev s6;
   adcRev adc;
   motorRev m1;
   motorRev m2;
   motorRev m3;
   motorRev m4;
}REV;

union s{
  SET send;
  uint8_t cSend[128];
  };
  
union r{
  REV inf;
  uint8_t cInf[128];
  };

extern r revInf;
extern s sendCmd;
//class custom
//{
    //public:
    void sendCmdRevInf(uint8_t size);
    int legoLightSensor(uint8_t s);
    int ev3UartSensor(uint8_t s,uint8_t mode);
//};
#endif // #ifndef FMSHIELD_H


