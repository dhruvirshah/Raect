import React, { useState } from 'react';
import './body.css'; // Importing the separate CSS file

const DessertItem = ({ title, image, description, isShown, onToggle }) => (
  <div className="content-box">
    <h3>{title}</h3>
    <img src={image} alt={title} style={{ width: '300px', height: '300px' }} />
    <button onClick={onToggle}>Read More</button>
    {isShown && <p>{description}</p>}
  </div>
);

const Body = () => {
  const [showData, setShowData] = useState({
    watermelon: false,
    nutellaWaffle: false,
    pumpkinPie: false,
    hotSizzlingBrownie: false,
    yuleLogCake: false,
    strawberryShortcake: false
  });

  const handleButtonClick = (key) => {
    setShowData({
      ...showData,
      [key]: !showData[key]
    });
  };

  const desserts = [
    {
      key: 'watermelon',
      title: 'Watermelon Slices',
      image: 'https://www.thegunnysack.com/wp-content/uploads/2019/08/Watermelon-Pizza-Recipe-sq-500x375.jpg',
      description: "As the sun beats down and temperatures soar, it's the perfect time to indulge in refreshing summer treats. From juicy watermelon slices to creamy gelato, there's no shortage of delights to keep you cool and satisfied during the hottest months of the year."
    },
    {
      key: 'nutellaWaffle',
      title: 'Nutella Waffle',
      image: 'https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg',
      description: "Imagine a breakfast or dessert delight: warm, crispy waffles adorned with a generous swirl of Nutella. Each bite is a harmony of textures, with the waffle's golden exterior giving way to a fluffy, tender inside, while the Nutella adds a creamy, indulgent sweetness. The Nutella melts slightly, creating a luscious, chocolatey sauce that envelops every crevice of the waffle. Topped with a dusting of powdered sugar or a dollop of whipped cream, it's a treat that satisfies both the craving for comfort and the desire for decadence."
    },
    {
      key: 'pumpkinPie',
      title: 'Pumpkin Pie',
      image: 'https://en-chatelaine.mblycdn.com/ench/resized/2023/09/1600x1200/pumpkin-pie-recipe-960.png',
      description: "As leaves turn golden and the air grows crisp, it's time to embrace the warm and comforting flavors of autumn. From spiced pumpkin pies to fragrant apple crisps, there's something truly special about the desserts that accompany this magical season."
    },
    {
      key: 'hotSizzlingBrownie',
      title: 'Hot Sizzling Brownie',
      image: 'https://images.hindustantimes.com/img/2022/12/18/original/Sizzling_Brownie2_1671355108601.jpg',
      description: "Explore a chocolate lover's paradise in our brownie-centric vlog, where each episode unveils new twists on the classic treat. From gooey centers to crispy edges, we delve deep into the art of brownie perfection. Join us as we journey through a world of decadent flavors and irresistible textures, igniting your passion for baking along the way."
    },
    {
      key: 'yuleLogCake',
      title: 'Yule Log Cake',
      image: 'https://thegypsychef.com/wp-content/uploads/yule-log-cake.jpg',
      description: "When snow blankets the ground and frost glistens on windowpanes, there's no better time to cozy up with a cup of hot cocoa and a plate of decadent desserts. From festive gingerbread cookies to elegant Yule logs, winter desserts are a celebration of warmth, indulgence, and joy."
    },
    {
      key: 'strawberryShortcake',
      title: 'Strawberry Shortcake',
      image: 'https://www.simplyrecipes.com/thmb/KLwait7-HLy2RAeYUnbR3H9gigo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SimplyRecipes_StrawberryShortcakeCake_LEAD_11-2614b783502a467fb2d726f41ba895b1.jpg',
      description: "As flowers bloom and birds sing, spring brings a sense of renewal and rejuvenation. Celebrate the season of growth and new beginnings with desserts that showcase the vibrant flavors of fresh fruits and delicate flowers."
    }
  ];

  return (
    <div className="body">
      <div className="container">
        {desserts.map((dessert) => (
          <DessertItem
            key={dessert.key}
            title={dessert.title}
            image={dessert.image}
            description={dessert.description}
            isShown={showData[dessert.key]}
            onToggle={() => handleButtonClick(dessert.key)}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
