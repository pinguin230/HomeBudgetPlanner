import React from 'react';
import MyInput from "../../components/UI/input/MyInput";
import MyButton from "../../components/UI/button/MyButton";
import registration_img from "./../../images/Hero Image.svg"
import "./registration.scss"

const registration = () => {
  return (
    <div className="registration__container">
      <div className="registration__column">
        <h1>Реєстрація</h1>
        <div className="registration__row">
          <div className="registration__row-name">
            <div className="registration__row-first_name">
              <p>First name</p>
              <MyInput
                placeholder="Jane"
              />
            </div>
            <div className="registration__row-last_name">
              <p>Last name</p>
              <MyInput
                placeholder="Smitherton"
              />
            </div>
          </div>

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
            <MyInput
              placeholder="Smitherton"
            />
          </div>
          <div className="">
            <MyButton
              className="registration__button"
            >
              Sign up
            </MyButton>
          </div>
        </div>
      </div>

      <div className="registration__column registration__column-img">
        <img src={registration_img} alt=""/>
      </div>
    </div>
  );
};

export default registration;