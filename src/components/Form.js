import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../CSS/Form.css';

// import icones
import isInRange from '../helpers/isInRange';
import complete from '../img/complete.png';
import link from '../img/link.png';

// maximo de pontos que um card pode ter
const MAX_POINTS = 210;

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>

        <h2>Adicione Nova Carta</h2>

        <label htmlFor="name" className="name">
          Nome
          <input
            type="text"
            name="cardName"
            id="name"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description" className="description">
          Descrição
          <textarea
            name="cardDescription"
            id="description"
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
            maxLength="128"
          />
        </label>

        <label htmlFor="attr1" className="attr">
          Attr01
          <input
            type="number"
            name="cardAttr1"
            id="attr1"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
          {
            isInRange(cardAttr1)
              ? <img src={ complete } alt="" />
              : <img className="invisivel" src={ complete } alt="" />
          }
        </label>

        <label htmlFor="attr2" className="attr">
          Attr02
          <input
            type="number"
            name="cardAttr2"
            id="attr2"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
          {
            isInRange(cardAttr2)
              ? <img src={ complete } alt="" />
              : <img className="invisivel" src={ complete } alt="" />
          }
        </label>

        <label htmlFor="attr3" className="attr">
          Attr03
          <input
            type="number"
            name="cardAttr3"
            id="attr3"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min="0"
            max="90"
          />
          {
            isInRange(cardAttr3)
              ? <img src={ complete } alt="" />
              : <img className="invisivel" src={ complete } alt="" />
          }
        </label>

        {/* exibir pontos restantes dos attr, começa com 210 e vai diminuindo */}
        <p className="remainig-points">
          Pontos restantes:
          {' '}
          {' '}
          { MAX_POINTS - (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) }
        </p>

        <label htmlFor="image" className="image">
          Imagem
          <div className="image-input">
            <input
              type="text"
              name="cardImage"
              id="image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }

            />
            <img src={ link } alt="" />
          </div>
        </label>

        <label htmlFor="rare-input" className="rare">
          Raridade
          <select
            name="cardRare"
            id="rare-input"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        {/* exibir total de pontos da soma dos attr */}
        <p className="total-points">
          Total de pontos:
          {' '}
          {' '}
          { Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) }
        </p>

        <div className="footer">

          {
            hasTrunfo
              ? <p className="has-trunfo"> Você já tem um Super Trunfo em seu baralho</p>
              : (
                <label htmlFor="trunfo-input" className="trunfo-input">
                  Super Trunfo?
                  <input
                    type="checkbox"
                    name="cardTrunfo"
                    id="trunfo-input"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                </label>
              )
          }

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            className="save-button"
          >
            Salvar
          </button>

        </div>

      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;