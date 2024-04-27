import React from 'react';
import MyButton from "../button/MyButton";
import "../../../style/style.css"
import "./HomeDescription.scss"

const HomeDescription = () => {
  return (
    <div className="home__description-container">
        <div>
          <div className="home__description-title">
            <h1>Корисні поради</h1>
          </div>
          <div className="home__description-description">
            <p>Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page
              might look:</p>
            <p>Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite
              perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing,
              essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute
              quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter
              destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect
              consectetur.</p>
            <p>Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim.
              Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable
              deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.</p>
          </div>
        </div>
    </div>
  );
};

export default HomeDescription;