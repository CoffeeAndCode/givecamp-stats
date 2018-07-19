import { get, set } from 'idb-keyval';
import Papa from 'papaparse';
import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import '../assets/stylesheets/App.css';
import CSVGenerator from './CSVGenerator';
import Stats from './Stats';

const floaterEmails = (process.env.REACT_APP_FLOATERS || '').split(',');

function isTechnicalVolunteer(csvRow) {
  if (
    csvRow['Ticket Type'] === 'Copywriter' ||
    csvRow['Ticket Type'] === 'Non Technical Volunteer' ||
    csvRow['Ticket Type'] === 'Non-profit representative' ||
    csvRow['Ticket Type'] === 'Organizer' ||
    csvRow['Ticket Type'] === 'Project Manager'
  ) {
    return false;
  }
  return true;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      csvData: [],
      dataLoaded: false,
      dups: [],
      foodAllergies: {},
      numberOfGiveCamps: {},
      numberOfFloaters: floaterEmails.length,
      tshirts: {},
      ticketTypes: {},
      yearsOfExperience: {},
      totalCount: 0
    };
  }

  componentDidMount() {
    get('state').then(state => this.setState(state));
  }

  handleChange(event) {
    Array.from(event.target.files).forEach(file => {
      Papa.parse(file, {
        complete: (results, file) => {
          console.log('Parsing complete:', results, file);

          const numberOfGiveCamps = results.data.reduce((memo, row, _index) => {
            if (
              row[
                'How many GiveCamps have you attended before this one?  (All locations.)'
              ] === ''
            ) {
              return memo;
            }
            if (
              !Object.keys(memo).includes(
                row[
                  'How many GiveCamps have you attended before this one?  (All locations.)'
                ]
              )
            ) {
              memo[
                row[
                  'How many GiveCamps have you attended before this one?  (All locations.)'
                ]
              ] = 0;
            }

            memo[
              row[
                'How many GiveCamps have you attended before this one?  (All locations.)'
              ]
            ] += 1;
            return memo;
          }, {});

          const emailByCount = results.data.reduce((memo, row, _index) => {
            if (!Object.keys(memo).includes(row['Email'])) {
              memo[row['Email']] = 0;
            }

            memo[row['Email']] += 1;
            return memo;
          }, {});
          const dups = Object.keys(emailByCount).filter(
            email => emailByCount[email] > 1
          );

          const foodAllergies = results.data.reduce((memo, row, _index) => {
            const dietaryNeed = row['Special dietary needs:']
              .toLowerCase()
              .trim();
            if (['', 'n/a', 'no', 'none'].includes(dietaryNeed)) {
              return memo;
            }

            if (!Object.keys(memo).includes(dietaryNeed)) {
              memo[dietaryNeed] = 0;
            }

            memo[dietaryNeed] += 1;
            return memo;
          }, {});

          const ticketTypes = results.data.reduce((memo, row, _index) => {
            if (!Object.keys(memo).includes(row['Ticket Type'])) {
              memo[row['Ticket Type']] = 0;
            }

            memo[row['Ticket Type']] += 1;
            return memo;
          }, {});

          const tshirts = results.data.reduce((memo, row, _index) => {
            const tshirtKey = `${this.tshirtType(row)} - ${
              row['T-shirt size']
            }`;
            if (!Object.keys(memo).includes(tshirtKey)) {
              memo[tshirtKey] = 0;
            }

            memo[tshirtKey] += 1;
            return memo;
          }, {});

          const yearsOfExperience = results.data.reduce((memo, row, _index) => {
            if (!isTechnicalVolunteer(row)) {
              return memo;
            }
            if (!Object.keys(memo).includes(row['Experience level:'])) {
              memo[row['Experience level:']] = 0;
            }

            memo[row['Experience level:']] += 1;
            return memo;
          }, {});

          set('state', {
            dataLoaded: true,
            dups,
            foodAllergies,
            numberOfFloaters: this.state.numberOfFloaters,
            numberOfGiveCamps,
            ticketTypes,
            tshirts,
            yearsOfExperience,
            totalCount: results.data.length
          });
          this.setState({
            csvData: results.data,
            dataLoaded: true,
            dups,
            foodAllergies,
            numberOfGiveCamps,
            ticketTypes,
            tshirts,
            yearsOfExperience,
            totalCount: results.data.length
          });
        },
        header: true,
        skipEmptyLines: true
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

        <label className="App-file-label" htmlFor="csv-file">
          Select an EventBrite CSV File
        </label>
        <input
          className="App-file-input"
          id="csv-file"
          name="file"
          onChange={event => this.handleChange(event)}
          type="file"
        />
        <h1>Total Submissions: {this.state.totalCount}</h1>

        {this.state.dataLoaded ? <Stats {...this.state} /> : ''}
        <hr />
        <CSVGenerator rows={this.state.csvData} />
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
