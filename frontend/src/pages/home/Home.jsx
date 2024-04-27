import React from 'react';
import HomeTitle from "../../components/UI/home-title/HomeTitle";
import image__dollar from "./../../images/image 1.svg"
import "./Home.scss";
import "./../../style/style.css"
import HomeDescription from "../../components/UI/home-description/HomeDescription";

const Home = () => {
	return (
		<div>
			<HomeTitle/>
			<div className="container home__image__container">
				<img className="home__image" src={image__dollar} alt="image__dollar"/>
			</div>
			<HomeDescription/>
		</div>
		
	);
}

export default Home;
