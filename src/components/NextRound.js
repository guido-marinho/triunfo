import PropTypes from 'prop-types';
import { Component } from 'react';
import '../CSS/NextRound.css';
import Result from './Result';

export default class NextRound extends Component {
  render() {
    const { cardDeck, gameCard, gameScore, newRound } = this.props;
    return gameCard  + 2 >=  cardDeck.length ?  (
      <Result  gameScore={ gameScore } />
    ) : (
      <>
      <p>{ gameScore[2] }</p>
      <button
        className='
        btn-next-round'
        type='button'
        onClick={ newRound }
      >
        Next Round
      </button>
      </>
    );
  }
}

NextRound.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  gameCard: PropTypes.number.isRequired,
  gameScore: PropTypes.number.isRequired,
  newRound: PropTypes.func.isRequired,
};