module.exports = {
    //-- system errors
    'SYSTEM_ERROR': {code: 1000, message: 'System error'},
    'ENV_NOT_SET_ERROR': {code: 1001, message: 'Env not set error'},
    'NOT_IMPLEMENTED_ERROR': {code: 1002, message: 'Not implemented error'},
    'SERVER_SHUTTING_DOWN': {code: 1003, message: 'Server shutting down'},
    'SERVICE_CHECK_FAILED': {code: 1004, message: 'Service check failed'},
    'PREBOOT_ERROR': {code: 1005, message: 'Preboot error'},
    'BOOT_ERROR': {code: 1006, message: 'Boot error'},
    'PREEXIT_ERROR': {code: 1007, message: 'Preexit error'},
    'EXIT_ERROR': {code: 1008, message: 'Exit error'},
    'LISTEN_ERROR': {code: 1009, message: 'Listen error'},
    'SERVICE_BOOT_FAILED': {code: 1010, message: 'Server boot failed'},

    //-- common-defined errors
    'NOT_AUTHENTICATED_ERROR': {code: 1011, message: 'Not authenticated error'},
    'MISSING_REQUIRED_VALUE': {code: 1012, message: 'Missing required params'},
    'ACCESS_DENIED': {code: 1013, message: 'Access denied'},
    'PERMISSION_DENIED': {code: 1014, message: 'Permission denied'},
    'NOT_VALID_ID': {code: 1015, message: 'Not valid _id mongo'},
    'NOT_VALID_DATE_VALUE': {code: 1016, message: 'Not valid date value'},
    'NOT_FOUND_ERROR': {code: 1017, message: 'Not found error'},
    'WRONG_DEFINE_VALUE': {code: 1018, message: 'Wrong define value'},
    'NOT_VALID_EMAIL_VALUE': {code: 1019, message: 'Wrong email value'},
    'TOKEN_EXPIRED': {code: 1020, message: 'Token is expired'},
    'TOKEN_WRONG': {code: 1021, message: 'Token is wrong'},
    'DEVICE_DENIED': {code: 1022, message: 'Device denied'},
    'WRONG_REFRESH_TOKEN': {code: 1023, message: 'Wrong refresh token error'},
    'REFRESH_TOKEN_EXPIRED': {code: 1024, message: 'Refresh token is expired'},
    'NOT_VALID_NUMBER_VALUE': {code: 1025, message: 'Not valid number value'},
    'NOT_VALID_ARRAY': {code: 1026, message: 'Not valid array'},
    'WRONG_OBJECT_ID_VALUE': {code: 1027, message: 'Wrong objectId value'},

    //-- defined errors
    'INVALID_CREDENTIAL': {code: 1051, message: 'Invalid credential'},
    'DUPLICATE_EMAIL_ERROR': {code: 1052, message: 'Email is duplicated!'},
    'PASSWORD_TO_SHORT': {code: 1053, message: 'Password is too short'},
    'PASSWORD_TO_LONG': {code: 1054, message: 'Password is too long'},
    'WRONG_CODE_ERROR': {code: 1055, message: 'The entered code is invalid or expired'},
    'NOT_CONFIRM_ERROR': {code: 1056, message: 'Your email is not verified yet'},
    'PASSWORD_HAVE_SPACE': {code: 1057, message: 'Password must not be contain space'},
    'CHANGED_PASSWORD_ERROR': {code: 1058, message: 'You changed your password, please resend email again'},
    'WRONG_LENGTH_ERROR': {code: 1059, message: 'Your input text has wrong length, please input again'},
};
