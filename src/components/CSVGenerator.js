import Papa from 'papaparse';
import React from 'react';

class CSVGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadURL: null
    };
  }

  applyTeamsToRowData(results) {
    const teamsByEmail = results.data.reduce((memo, row) => {
      memo[row['Email'].toLowerCase().trim()] = row['Team'];
      return memo;
    }, {});

    this.props.rows.forEach(row => {
      row['Team'] = teamsByEmail[row['Email'].toLowerCase().trim()] || '';
    });

    const csvTeamFile = new File([Papa.unparse(this.props.rows)], 'teams.csv', { type: 'text/csv' })
    this.setState({ downloadURL: URL.createObjectURL(csvTeamFile) });
  }

  componentWillUnmount() {
    if (this.state.downloadURL) {
      URL.revokeObjectURL(this.state.downloadURL);
    }
  }

  handleChange(event) {
    Array.from(event.target.files).forEach(file => {
      Papa.parse(file, {
        complete: this.applyTeamsToRowData.bind(this),
        header: true,
        skipEmptyLines: true
      });
    });
  }

  render() {
    return (
      <div>
        <h1>CSV Generator</h1>
        <h2>This will apply teams letters to a newer EventBrite roster you can download to CSV.</h2>
        <ol>
          <li>Add the <em>newest</em> EventBrite export above.</li>
          <li>
            <p>Add a second CSV file that includes a "Team" column.
            <label className="App-file-label" htmlFor="team-csv-file">
              Select a CSV TEAM File
            </label>
            <input
              className="App-file-input"
              id="team-csv-file"
              name="file"
              onChange={event => this.handleChange(event)}
              type="file"
            />
            </p>
          </li>
          <li>Click the link that appears to download the merged CSV file.</li>
        </ol>
        {this.renderRowCount()}
        {this.renderDownloadLink()}
      </div>
    );
  }

  renderDownloadLink() {
    if (this.state.downloadURL) {
      return <a href={this.state.downloadURL}>Download CSV</a>;
    }
  }

  renderRowCount() {
    if (this.props.rows.length === 0) { return }

    return <p>{this.props.rows.length} rows</p>;
  }
}

export default CSVGenerator;
