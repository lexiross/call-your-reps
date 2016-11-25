import React, { Component } from 'react';
import ZipForm              from "./ZipForm";
import Rep                  from "./Rep";
import Script               from "./Script";
import Footer               from "./Footer";
import { VLayout }          from 'react-flexbox-layout';

const SPREADSHEET_KEY = "174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo";
const GOOGLE_API_KEY = "AIzaSyB_Br-_gaXwK_OxF1HgNcU5LGeja7oIp1A";
const SHEET_NAME = "Weekly%20Call%20to%20Action";
const CELL = "B2";

const CONTAINER_STYLE = {
  margin: "5px",
};

class App extends Component {

  constructor () {
    super();
    this.state = {
      error: false,
      reps: null,
      script: null,
    };
  }

  componentWillMount () {
    this._fetchScript();
  }

  render() {
    if (!this.state.reps || !this.state.reps.length) {
      return (
        <ZipForm
          error={this.state.error}
          noReps={!!this.state.reps && !this.state.reps.length}
          onSubmit={this._fetchReps}
        />
      );
    } else {
      return (
        <div style={CONTAINER_STYLE}>
          <VLayout gutter={15}>
            <a href="#" onClick={this._reset}>Back</a>
            <Script text={this.state.script} />
            <VLayout gutter={10}>
              { this.state.reps.map((rep) => <Rep rep={rep} key={rep.bioguide_id} />) }
            </VLayout>
            <Footer />
          </VLayout>
        </div>
      );
    }
  }

  _fetchScript = () => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_KEY}/values/${SHEET_NAME}!${CELL}?key=${GOOGLE_API_KEY}`;
    window.fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({script: data.values[0][0]}))
      .catch((err) => this.setState({error: true}));
  }

  _fetchReps = (zipCode) => {
    window.fetch(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${zipCode}`)
      .then((res) => res.json())
      .then((data) => this.setState({error: false, reps: data.results}));

  }

  _reset = (e) => {
    e.preventDefault();
    this.setState({
      error: false,
      reps: null
    });
  }
}

export default App;
