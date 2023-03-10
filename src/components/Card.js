import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="Card">
        <ul data-testid="name-card">{ cardName }</ul>
        <ul><img src={ cardImage } alt={ cardName } data-testid="image-card" /></ul>
        <ul data-testid="description-card">{ cardDescription }</ul>
        <ul data-testid="attr1-card">{ cardAttr1 }</ul>
        <ul data-testid="attr2-card">{ cardAttr2 }</ul>
        <ul data-testid="attr3-card">{ cardAttr3 }</ul>
        <ul data-testid="rare-card">{ cardRare }</ul>
        <ul>
          { cardTrunfo === true && <span data-testid="trunfo-card">Super Trunfo</span> }
        </ul>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr2: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardAttr3: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
