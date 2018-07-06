import Papa from 'papaparse';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Stats from './Stats';

const floaterEmails = [
  'brendan@enrick.com',
  'james@jamesrgifford.com',
  'markoiskander@gmail.com',
  'jon@coffeeandcode.com',
  'rritchey@worldsynergy.com',
  'jonesmac82@gmail.com',
  'sarah@codinggeekette.com'
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataLoaded: false,
      tshirts: {},
      ticketTypes: {}
    }
  }

  handleChange(event) {
    Array.from(event.target.files).forEach(file => {
      Papa.parse(file, {
        complete: (results, file) => {
          console.log("Parsing complete:", results, file);

          const ticketTypes = results.data.reduce((memo, row, _index) => {
            if (row['Ticket Type'] === undefined) { return memo; }
            if (!Object.keys(memo).includes(row['Ticket Type'])) {
              memo[row['Ticket Type']] = 0;
            }

            memo[row['Ticket Type']] += 1;
            return memo;
          }, {});

          const tshirts = results.data.reduce((memo, row, _index) => {
            if (row['Ticket Type'] === undefined) { return memo; }
            const tshirtKey = `${this.tshirtType(row)} - ${row['T-shirt size']}`;
            if (!Object.keys(memo).includes(tshirtKey)) {
              memo[tshirtKey] = 0;
            }

            memo[tshirtKey] += 1;
            return memo;
          }, {});

          this.setState({
            dataLoaded: true,
            ticketTypes,
            tshirts
          });
        },
        header: true
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cleveland GiveCamp</h1>
        </header>

        <label className="App-file-label" htmlFor="csv-file">Select an EventBrite CSV File</label>
        <input className="App-file-input" id="csv-file" name="file" onChange={(event) => this.handleChange(event)} type="file" />

        {this.state.dataLoaded ? <Stats {...this.state} /> : '' }
      </div>
    );
  }

  tshirtType(csvRow) {
    if (csvRow['Ticket Type'] === 'Organizer') {
      return 'Organizer';
    }

    if (floaterEmails.includes(csvRow['Email'])) {
      return 'Organizer';
    }

    return 'Normal';
  }
}

export default App;
