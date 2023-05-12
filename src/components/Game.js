import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Battle from './Battle';
import GameTable from './GameTable';
import NextRound from './NextRound';


class Game extends Component {
  render() {
    const  { cardDeck, gameCard, gameAction, gameAttr, rounds, gameScore, newGame, endGame, playGame, newRound, onInputChange } = this.props;
    return (
      <div>
        <div className="game-container">
          
          <button 
          onClick={ newGame }
          disabled={ cardDeck.length }
          >PLAY
          </button>

          {
            cardDeck.length ? (
              <>
                < GameTable 
                  cardDeck={cardDeck } 
                  gameCard={ gameCard }
                  rounds={ rounds }
                  gameAction={ gameAction }
                  gameScore={ gameScore }
                />

                <div className='result'>
                  {
                    gameAction ? (
                      <NextRound 
                        cardDeck={ cardDeck }
                        gameCard={ gameCard }
                        gameScore={ gameScore }
                        newRound={ newRound }
                      />
                    ) : (
                      < Battle 
                        cardDeck={ cardDeck }
                        gameCard={ gameCard }
                        cardAttr={ gameAttr }
                        playGame={ playGame }
                        onInputChange={ onInputChange }
                      />
                    )
                  }
                </div>

                <div className='buttons-game'>
                  <button
                    className='btn btn-success'
                    type='button'
                    onClick={ newGame }
                  >
                    New Game
                  </button>
                  <button
                    className='btn btn-danger'
                    type='button'
                    onClick={ endGame }
                    >
                      End Game
                    </button>
                </div>
              </>
            ) : (
              <section className="game-deck">
                <div className="players-container">
                  <div className="card-verse" />
                </div>
                <div className="players-container">
                  <div className="card-verse" />
                </div>
              </section>
            )
          }

        </div>
      </div>
        
      );
  }
}

Game.propTypes = {
  cardDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  gameCard: PropTypes.number.isRequired,
  rounds: PropTypes.number.isRequired,
  gameAction: PropTypes.bool.isRequired,
  gameScore: PropTypes.number.isRequired,
  newGame: PropTypes.func.isRequired,
  endGame: PropTypes.func.isRequired,
  playGame: PropTypes.func.isRequired,
  newRound: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Game;