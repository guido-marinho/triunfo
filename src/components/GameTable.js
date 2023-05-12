import { Component } from 'react';
import '../CSS/GameTable.css';
import Card from './Card';


export default class GameTable extends Component {
  render() {
    const { cardDeck, gameCard, rounds, gameAction, gameScore } = this.props;
    return (
      <div className="game-deck">
        <div className="player">
          <h3>Player 1</h3>
            {
              (!rounds || gameAction) ? (
                < Card
                  cardName={ cardDeck[gameCard].name }
                  cardDescription={ cardDeck[gameCard].description }
                  cardAttr1={ cardDeck[gameCard].attr1 }
                  cardAttr2={ cardDeck[gameCard].attr2 }
                  cardAttr3={ cardDeck[gameCard].attr3 }
                  cardImage={ cardDeck[gameCard].image }
                  cardRare={ cardDeck[gameCard].rare }
                  cardTrunfo={ cardDeck[gameCard].trunfo }
                />
              ) : ( 
                <div className="card-verse"/>
              )
            }
            <p className='score'>{ gameScore[0] }</p>
        </div>

        <div className="player">
          <h3>Player 2</h3>
            {
              (rounds || gameAction) ? (
                < Card
                  cardName={ cardDeck[gameCard + 1].name }
                  cardDescription={ cardDeck[gameCard + 1].description }
                  cardAttr1={ cardDeck[gameCard + 1].attr1 }
                  cardAttr2={ cardDeck[gameCard + 1].attr2 }
                  cardAttr3={ cardDeck[gameCard + 1].attr3 }
                  cardImage={ cardDeck[gameCard + 1].image }
                  cardRare={ cardDeck[gameCard + 1].rare }
                  cardTrunfo={ cardDeck[gameCard + 1].trunfo }
                />
              ) : (
                <div className="card-verse"/>
              )
            }
            <p className='score'>{ gameScore[1] }</p>
        </div>  
      </div>
      
    )
  }
}
