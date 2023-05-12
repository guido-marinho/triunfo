// import de react
import React from 'react';
import 'react-perfect-scrollbar/dist/css/styles.css';


//  import de css
import './App.css';

//  import de componentes
import Card from './components/Card';
import Filters from './components/Filters';
import Form from './components/Form';

//  import de helpers
import Game from './components/Game';
import isInRange from './helpers/isInRange';
import isSumLessThan210 from './helpers/isSumLessThan210';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    savedCards: [],
    filterName: '',
    filterRare: 'todas',
    filterTrunfo: false,
    cardDeck: [],
    gameCard: 0,
    gameAction: false,
    gameAttr: '1',
    gameScore: [0, 0, ''],
    rounds: 0,
  };

  // recupera savedCards do localStorage
  componentDidMount() {
    const savedCards = JSON.parse(localStorage.getItem('savedCards'));
    if (savedCards) {
      this.setState({ savedCards });
    }
  }

  // salva savedCards no localStorage
  componentDidUpdate() {
    const { savedCards } = this.state;
    localStorage.setItem('savedCards', JSON.stringify(savedCards));
  }

  isTrunfo = () => {
    // desestruturação do state
    const { savedCards } = this.state;

    // verifica se existe algum card com o atributo cardTrunfo igual a true
    const haveTrunfo = savedCards.some((card) => card.cardTrunfo === true);

    // retorna o resultado da verificação (true ou false)
    return haveTrunfo;
  };

  isSaveButtonDisabled = () => {
    // desestruturação do state
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    // variavel para validar campos do formulário
    const isDisabled = !(
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && isInRange(cardAttr1)
      && isInRange(cardAttr2)
      && isInRange(cardAttr3)
      && isSumLessThan210(cardAttr1, cardAttr2, cardAttr3)
    );

    // retorno do resultado da verificação (true ou false)
    return isDisabled;
  };

  onSaveButtonClick = (event) => {
    // previne o comportamento padrão do botão (de recarregar a página)
    event.preventDefault();

    // desestruturação do state
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      savedCards,
    } = this.state;

    // cria um objeto com os dados do formulário
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    // adiciona o novo card ao array de cards salvos
    this.setState((prevState) => ({
      ...prevState,
      savedCards: [...savedCards, newCard],
    }));

    // limpa o formulário após salvar
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleRevomeCard = (cardName) => {
    // desestruturação do state
    const { savedCards } = this.state;

    // filtra o array de cards salvos, removendo o card com o nome passado como parâmetro
    const newCards = savedCards.filter((card) => card.cardName !== cardName);

    // atualiza o state com o novo array de cards
    this.setState({ savedCards: newCards });
  };

  newGame = () => {
    // desestruturação do state
    const { savedCards } = this.state;

    // cria um array com os indices do array de cards salvos
    const cardDeck = savedCards.map((card, index) => index);

    // embaralha o array de indices
    for (let index = cardDeck.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      const aux = cardDeck[index];
      cardDeck[index] = cardDeck[randomIndex];
      cardDeck[randomIndex] = aux;
    }

    // atualiza o state com o novo array de indices e reseta o jogo
    this.setState({
      cardDeck,
      gameCard: 0,
      gameAction: false,
      gameAttr: '',
      gameScore: [0, 0, ''],
      rounds: 0,
    });
  };

  endGame = () => {
    // desestruturação do state
    const { gameScore } = this.state;

    // verifica se o jogo terminou empatado
    const isDraw = gameScore[0] === gameScore[1];

    // verifica se o jogador 1 venceu
    const isPlayer1Winner = gameScore[0] > gameScore[1];

    // atualiza o state com o resultado do jogo
    this.setState((prevState) => ({
      ...prevState,
      gameScore: [0, 0, isDraw ? 'Empate' : isPlayer1Winner ? 'Jogador 1' : 'Jogador 2'],
    }));
  };

  playGame = (event) => {
    // previne o comportamento padrão do botão (de recarregar a página)
    event.preventDefault();

    // desestruturação do state
    const { cardDeck, gameCard } = this.state;

    // verifica se o jogo terminou
    if (gameCard + 2 >= cardDeck.length) {
      this.endGame();
      return;
    }

    // atualiza o state com o novo card e a ação do jogo
    this.setState((prevState) => ({
      ...prevState,
      gameCard: gameCard + 2,
      gameAction: true,
      gameAttr: '',
    }));
  };

  newRound = () => {
    // desestruturação do state
    const { gameScore, gameAttr } = this.state;

    // verifica se o jogo terminou
    if (gameScore[2]) {
      this.newGame();
      return;
    }

    // atualiza o state com o novo round
    this.setState((prevState) => ({
      ...prevState,
      gameAction: false,
      gameAttr: gameAttr === 'attr1' ? 'attr2' : 'attr1',
      rounds: prevState.rounds + 1,
    }));
  };


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
      savedCards,
      filterName,
      filterRare,
      filterTrunfo,
      cardDeck,
      gameCard,
      gameAction,
      gameAttr,
      gameScore,
      rounds,
    } = this.state;

    return (

      <>
        <div className="container">

          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ this.isTrunfo() }
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
          />

          <div>
            <h2 className="title">Pré-visualização</h2>

            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>

        </div>

        <h2 className="title-2">Todas as cartas</h2>
        <Filters
          filterName={ filterName }
          filterRare={ filterRare }
          filterTrunfo={ filterTrunfo }
          onInputChange={ this.onInputChange }
        />
        <div className="card-list-container">
          {
            
            savedCards.filter((card) => (
              card.cardName.toLowerCase().includes(filterName.toLowerCase())
              && (filterRare === 'todas' ? card : card.cardRare === filterRare)
              && (filterTrunfo ? card.cardTrunfo === filterTrunfo : card)
            )).map((card) => (
              <div className="card-list-item" key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  className="delete-button"
                  onClick={ () => this.handleRevomeCard(card.cardName) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </div>

        < Game
          cardDeck={ cardDeck }
          gameCard={ gameCard }
          gameAction={ gameAction }
          gameAttr={ gameAttr }
          rounds={ rounds }
          gameScore={ gameScore }
          newGame={ this.newGame }
          endGame={ this.endGame }
          playGame={ this.playGame }
          newRound={ this.newRound }
          onInputChange={ this.onInputChange }         
          />

      </>
    );
  }
}

export default App;
