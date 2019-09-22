import React, { Component } from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import valueChart from './DraftValues';
import Player from '../../../img/player.png';

class KeeperCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adp: '',
      picklost: '',
      tkv: '',
      valueChart
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateValues() {
    _.mapKeys(valueChart, (value, key) => {
      if (this.state.adp === key) {
        this.state.adp = value;
      }
      if (this.state.picklost === key) {
        this.state.picklost = value;
      }
    });
    console.log(this.state.adp);
    console.log(this.state.picklost);
  }

  calculateValue() {
    this.setState({
      tkv: this.state.adp - this.state.picklost,
      adp: '',
      picklost: ''
    });
  }

  onSubmit(e) {
    e.preventDefault();

    this.updateValues();
    this.calculateValue();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="calculator">
        <div className="container">
          <div className="row">
            <div className="col-md-8" style={{ textAlign: 'center' }}>
              <h1 className="display-4 text-center">Keeper Calculator</h1>
              <p className="lead text-center">
                Calculator to determine the value of your keeper with respect to
                the draft pick lost for keeping said player.
              </p>
              <small className="d-block">
                <p>
                  <b>ADP (Average Draft Position):</b> The player's preseason
                  consensus draft position (or use your own rankings).
                </p>
                <p>
                  <b>Pick Lost</b>: The pick you are losing for keeping this
                  player.
                </p>
                <p>
                  <b>TKV (Total Keeper Value):</b> The total value of your
                  keeper considering the pick that is lost with keeping him.
                </p>
              </small>
              <img
                src={Player}
                alt="Player icon"
                style={{ height: '200px', width: '200px' }}
              />
              <form onSubmit={this.onSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ADP"
                    name="adp"
                    value={this.state.adp}
                    onChange={this.onChange}
                    info="Average draft position"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Pick Lost"
                    name="picklost"
                    value={this.state.picklost}
                    onChange={this.onChange}
                    info="Pick lost for keeping player"
                  />
                </div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4 "
                />
              </form>
              <div className="mt-4">
                <p
                  className={classnames(
                    { 'alert alert-success': this.state.tkv > 0 },
                    { 'alert alert-danger': this.state.tkv < 0 },
                    {
                      'alert alert-warning':
                        this.state.tkv === 0 || this.state.tkv === ''
                    },
                    'text-center'
                  )}
                >
                  Your keeper's value is {this.state.tkv}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default KeeperCalculator;
