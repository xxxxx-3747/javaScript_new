// CREATE OR REPLACE TRIGGER TRIG_WEATHER_DISASTER AFTER INSERT ON CD_WEATHER_DISASTER FOR EACH ROW
// DECLARE
// INTEGRITY_ERROR EXCEPTION;
// ERRNO INTEGER;
// ERRMSG CHAR ( 200 );
// DUMMY INTEGER;
// FOUND BOOLEAN;
//
// BEGIN
// IF INSERTING AND (INSTR('橙色,红色', :NEW.DISASTER_LEVEL) > 0 OR INSTR(:NEW.DISASTER_NAME, '雨') > 0) THEN
// INSERT INTO PS_WARN_INFO
// (WARN_ID,WARN_CLASS, WARN_TYPE, WARN_NAME, WARN_DATE, WARN_EFFECT_AREA, WARN_INFO_DESC, VALUE,WARN_VALUE,BSFLAG, CREATE_DATE,REMIND_FLAG,COMPLETE_FLAG,DEAL_RESULT,WARN_MOLD)
//
// VALUES
// (
// : NEW.DISASTER_ID,
//     '气象',
//     '1',
//     '气象预警',
// : NEW.DISASTER_DATE,
// : NEW.DISASTER_AREA,
// '您有一项新的预警信息：“' || : NEW.DISASTER_DESCRIBE || '”，请及时处理。',
//     '/',
// : NEW.DISASTER_NAME || : NEW.DISASTER_LEVEL || '预警',
//     0,
//     SYSDATE,
//     CASE
// WHEN ABS(ROUND(TO_NUMBER(:NEW.RELEASE_TIME - :NEW.DISASTER_DATE) * 24 * 60))>60 THEN 0
// ELSE 1 END,
//     0,
//     '0',
//     CASE :NEW.DISASTER_NAME
// WHEN '大风' THEN '2'
// WHEN '高温' THEN '3'
// WHEN '暴雨' THEN '4'
// WHEN '大雾' THEN '5'
// WHEN '寒潮' THEN '6'
// WHEN '霜冻' THEN '7'
// ELSE '12' END
// );
// END IF;
// EXCEPTION
// WHEN INTEGRITY_ERROR THEN
// RAISE_APPLICATION_ERROR(ERRNO, ERRMSG);
// END;
