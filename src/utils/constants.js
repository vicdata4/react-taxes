export const EMAIL_VALIDATOR = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LOGIN_VALIDATORS = {
    email: { required: true, pattern: EMAIL_VALIDATOR },
    password: { required: true, minLength: 5, maxLength: 20, pattern: /^[A-Za-z0-9]+$/i }
};
