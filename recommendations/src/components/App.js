import React, { Component } from 'react';
import '../styles/styles.css';
import data from '../data/recommendations.json';



const products = data.placements[0].items;

console.log(products)


class Gallery extends Component {
constructor(props) {
  super(props);
  this.state = {
    products,
    thumbnail: products.imageURL,
  };

}

  render() {
    return (
      <div className="recommendations">
       <h2 className="recommendations__title">If you like this, you might be into these</h2>
        <div className="recommendations_item-holder">
        {products.map(item => 
            <div className="recommendations__item" key={item.ID}>
            <a className="recommendations__item-link" href={item.linkURL}>
                <img className ="recommendations__item-thumbnail" src={item.imageURL} alt={item.name} />
            </a>
                <p className="recommendations__item-name">{item.name}</p>
                <p className="recommendations__item-price">£{item.price}</p>
                
            </div>  
        )}
        </div>
      </div>
    )
  }
}



export default Gallery;
