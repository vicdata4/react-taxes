import React from 'react';
import { useForm } from "react-hook-form";
import { LOGIN_VALIDATORS } from '../../utils/constants';
import { LOGIN } from '../../utils/locales';
import './LoginForm.css';

function LoginForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    if (data) {
      props.onFormSubmit(data);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-case">
        <label>{LOGIN.email_label}</label>
        <input placeholder="email" {...register("email", LOGIN_VALIDATORS.email)} />
        <p className="error error-email">{errors.email?.type === 'pattern' && LOGIN.email_error}</p>
      </div>
      <div className="input-case">
        <label>{LOGIN.password_label}</label>
        <input placeholder="password" autoComplete="off" {...register("password", LOGIN_VALIDATORS.password )} />
        <p className="error error-password">{errors.password?.type === 'pattern' && LOGIN.password_error}</p>
        <p className="error">{errors.password?.type === 'minLength' && LOGIN.password_minlength_error}</p>
        <p className="error">{errors.password?.type === 'maxLength' && LOGIN.password_maxlength_error}</p>
      </div>
      <input type="submit" />
    </form>
  );
}

export default LoginForm;
