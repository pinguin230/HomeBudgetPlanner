import React from 'react';
import logo from './../../../images/Logo.svg';
import {NavLink} from "react-router-dom";
import MyButton from "../button/MyButton";
import './Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__container">
				<div className="header__row">
					<div className="header__col header__col--logo">
						<NavLink to={"/"} className="header--logo">
							<img src={logo} alt="Logo"/>
						</NavLink>
					</div>
					<div className="header__col header__col--navigation">
						<nav className="header__navigation">
							<ul className="navigation__list">
								<li className="navigation__item active">
									<NavLink to={"/"}>ГОЛОВНА</NavLink>
								</li>
								<li className="navigation__item active">
									<NavLink to={"/"}>КОРИСНА ІНФОРМАЦІЯ</NavLink>
								</li>
								<li className="navigation__item active">
									<NavLink to={"/"}>МІЙ БЮДЖЕТ</NavLink>
								</li>
								<li className="navigation__item active">
									<NavLink to={"/"}>БАНКИ</NavLink>
								</li>

							</ul>
						</nav>
					</div>
					<div className="header__col header__col--login">
						<MyButton className="login__button">Увійти</MyButton>
					</div>
				</div>

			</div>
		</div>
	);
}

export default Header;
