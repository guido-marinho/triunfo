import React, { Component } from 'react';
import '../CSS/Game.css';
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
          className='btn-play'
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
                    className='btn-new-game'
                    type='button'
                    onClick={ newGame }
                  >
                    New Game
                  </button>
                  <button
                    className='btn-end-game'
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


export default Game;