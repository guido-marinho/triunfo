import PropTypes from 'prop-types';
import { Component } from 'react';

export default class Battle extends Component {
  render() {
    const { cardDeck, gameCard, cardAttr, playGame, onInputChange } = this.props;
    return (
      <div className='battle'>
        <div className='battle-attr'>
          <label htmlFor='attr'>Choose your attribute:</label>
          <select
            className='form-select'
            id='attr'
            name='attr'
            onChange={ onInputChange }
            value={ cardAttr }
          >
            <option value='attr1'>Attr1</option>
            <option value='attr2'>Attr2</option>
            <option value='attr3'>Attr3</option>
          </select>
        </div>
        <div className='battle-btn'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={ playGame }
          >
            Play
          </button>
        </div>
        {
          gameCard + 2 > cardDeck.length -1 && (
            <p className='last-round'>úttima rodada</p>
          )
        }
      </div>
    )
  }

}

Battle.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  gameCard: PropTypes.number.isRequired,
  cardAttr: PropTypes.string.isRequired,
  playGame: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};