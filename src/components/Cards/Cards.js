import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check our portfolio!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src='https://foxxy-labs.github.io/web-page/images/cat_caviar.jpg'
              text='Check it out'
              label='Fancycat.com'
              path='/web-page/portfolio' />

          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
