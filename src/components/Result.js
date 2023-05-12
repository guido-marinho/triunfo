import PropTypes from 'prop-types';
import { Component } from 'react';
import '../CSS/Result.css';

export default class Result extends Component {
  render() {
    const { gameScore } = this.props;
    return gameScore[0] === gameScore[1] ? (
      <p className='finish'>Empate</p>
    ) : (
      <p className='finish'>{ ` ${gameScore[0]}  > ${gameScore[1]} ? '1' : '2' `}</p>
    )
  }
}

Result.propTypes = {
  gameScore: PropTypes.number.isRequired,
};  