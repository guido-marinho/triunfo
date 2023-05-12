import PropTypes from 'prop-types';
import { Component } from 'react';
import '../CSS/Card.css';

// import icones
import vazio from '../img/vazio.png';

// remover icone de erro da imagem
const handleImage = ({ currentTarget }) => {
  currentTarget.onerror = null;
  currentTarget.src = vazio;
};

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const cardClassName = cardTrunfo ? 'card card-trunfo' : 'card';
    return (

      <div className="card-container">

        <div className={ cardClassName }>
          <h4 data-testid="name-card" className="name-card">{ cardName }</h4>

          <img
            data-testid="image-card"
            className="image-card"
            src={ cardImage }
            alt={ cardName }
            onError={ handleImage }
          />

          {
            cardTrunfo
              ? <p className="p-trunfo" data-testid="trunfo-card"> Super Trunfo </p> : ''
          }

          <h3
            data-testid="description-card"
            className="description-card"
          >
            { cardDescription }

          </h3>

          <div className="attr-card-container">
            <p data-testid="attr1-card" className="attr-card">
              Attr1..............................................
              <span>
                {' '}
                { cardAttr1}
              </span>
            </p>

            <p data-testid="attr2-card" className="attr-card">
              Attr2..............................................
              <span>{ cardAttr2 }</span>
            </p>

            <p data-testid="attr3-card" className="attr-card">
              Attr3..............................................
              <span>{ cardAttr3 }</span>

            </p>

            <p data-testid="rare-card" className="rare-card">
              rarity:
              <span>{ cardRare }</span>
            </p>
          </div>

        </div>

      </div>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;