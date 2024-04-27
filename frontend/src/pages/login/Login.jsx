import React from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import login_img from "./../../images/Hero Image.svg"
import "./Login.scss"

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__column">
        <h1>Вхід</h1>
        <div className="login__row">
          <div className="">
            <p>Email address</p>
            <MyInput
              placeholder="Smitherton"
            />
          </div>

          <div className="">
            <p>Password</p>
            <MyInput
              placeholder="Smitherton"
            />
          </div>
          <div className="">
            <MyButton
              className="login__button"
            >
              Log in
            </MyButton>
          </div>
          <div className="">
            <MyButton
            >
              Зареєструватись
            </MyButton>
            <MyButton
            >
              Забули пароль?'

              
            </MyButton>
          </div>
        </div>
      </div>

      <div className="login__column login__column-img">
        <img src={login_img} alt=""/>
      </div>
    </div>
  );
};

export default Login;