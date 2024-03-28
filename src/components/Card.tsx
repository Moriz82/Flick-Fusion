import React from 'react';
import './css/Card.css'; // Make sure to create a corresponding CSS file

class Card extends React.Component<{ image: any, title: any, rating: any, year: any }> {
    render() {
        let {image, title, rating, year} = this.props;
        return (
            <div className="card">
                <img src={image} alt={title} className="card-image"/>
                <div className="card-info">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-rating">{rating}</p>
                    <p className="card-year">{year}</p>
                </div>
            </div>
        );
    }
}

export default Card;