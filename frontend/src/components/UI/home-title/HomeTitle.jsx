import React from 'react';
import "../../../style/style.css"
import MyButton from "../button/MyButton";
import "./HomeTitle.scss";

const HomeTitle = () => {
    return (
        <div className="home__title">
            <div className="container">
                <div className="home__collum">
                    <div className="home__row home__row-title">
                        <p>Організуй свої гроші правильно</p>
                    </div>
                    <div className="home__row home__row-description">
                        <p>Увійди або зареєструйся, щоб почати керувати своїм бюджетом</p>
                    </div>
                    <div className="home__row home__row-button">
                        <MyButton className="start__button">Розпочати</MyButton>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeTitle;