import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/istockphoto-491962627-612x612.jpg'
              text='Sell your metal waste for high value money per weight'
              label='Metal Waste'
              path='/services'
            />
            <CardItem
              src='images/ewaste-aspect-ratio-2000-1200-1024x614.jpg'
              text='Sell your useless gadgets for huge money'
              label='E waste'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/plastic-waste.jpg'
              text='Get money from your plastic waste too'
              label='Plastic waste'
              path='/services'
            />
            <CardItem
              src='images/TM82378.jpg'
              text='Sell your glass waste here'
              label='Glasswaste'
              path='/services'
            />
            <CardItem
              src='images/chair.jpg'
              text='Resell your old furniture here'
              label='Furniture waste'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
