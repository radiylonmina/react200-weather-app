import React from 'react';
import SearchBar from './components/SearchBar';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className='container'>
          <div className='jumbotron bg-info text-white text-center'>
            <h1 className='display-2 text-center font-weight-bold'>SDCS Weather</h1>
            <h4 className='text-center font-weight-bold'>The most accurate weather check in the building</h4>
          </div>

          <SearchBar />

          <div className='row'>
            <div className='col-12 col-md-7 mb-4'>
              <CityInformation />
            </div>
            <div className='col-12 col-md-5 mb-4'>
              <SearchHistory />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
