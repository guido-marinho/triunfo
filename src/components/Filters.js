import PropTypes from 'prop-types';
import { Component } from 'react';
import '../CSS/Filters.css';

/**
* @extends {React.Component<{filterName:string.isRequired, filterRare:string.isRequired, filterTrunfo:boolean.isRequired, onInputChange:Function.isRequired}>}
*/
class Filters extends Component {
  render() {
    // desestruturação de props e state
    const { filterName, filterRare, filterTrunfo, onInputChange } = this.props;

    return (
      <div className="filters">
        <form className="form-filters">

          <label htmlFor="filterName" className="filterName">
            <input
              type="text"
              name="filterName"
              id="filterName"
              data-testid="name-filter"
              value={ filterName }
              onChange={ onInputChange }
              placeholder="filtar por nome"
              disabled={ filterTrunfo }
            />
          </label>

          <label htmlFor="filterRare" className="filterRare">
            <select
              name="filterRare"
              id="filterRare"
              data-testid="rare-filter"
              value={ filterRare }
              onChange={ onInputChange }
              disabled={ filterTrunfo }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="filterTrunfo" className="filterTrunfo">
            <input
              type="checkbox"
              name="filterTrunfo"
              id="filterTrunfo"
              data-testid="trunfo-filter"
              checked={ filterTrunfo }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>

        </form>
      </div>
    );
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
export default Filters;