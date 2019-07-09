import React, { Component } from 'react';
import { getWeather, updateSearchInput } from './searchbarActions';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleCity = this.handleCity.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCity(e) {
    e.preventDefault();
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(getWeather(value));
  }

  handleSearchInput(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(updateSearchInput(value));
  }

  handleSearch() {
    const { city, dispatch } = this.props;
    dispatch(getWeather(city));
  }

  render() {
    // value provided by connect()
    const { value } = this.props;
    return (
      <div>
        <div className='btn-group' role='group' aria-label='First group'>
          <button type='button' className='btn btn-secondary' value='San Diego' onClick={ this.handleCity }>San Diego</button>
          <button type='button' className='btn btn-secondary' value='New York' onClick={ this.handleCity }>New York</button>
          <button type='button' className='btn btn-secondary' value='Honolulu' onClick={ this.handleCity }>Honolulu</button>
          <button type='button' className='btn btn-secondary' value='London' onClick={ this.handleCity }>London</button>
          <button type='button' className='btn btn-secondary' value='Tokyo' onClick={ this.handleCity }>Tokyo</button>
        </div>
        <div className='input-group mb-3'>
          <input type='text' className='form-control' id='searchInput' placeholder='Enter City Name' value={ value } onChange={ this.handleSearchInput } aria-label='City Name' aria-describedby='basic-addon2'/>
            <div className='input-group-append'>
              <button className='btn btn-success' type='button' onClick={ this.handleSearch }>Get Weather</button>
            </div>
        </div>
      </div>
    );
  }
}
