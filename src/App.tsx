import React, { Component } from 'react';
import Stance from './Stance';
import Situation from './Situation';
import TargetSize from './TargetSize';
import Range from './Range';
import Shooter from './Shooter';
import Shooting from './Shooting';

import {
  calculateLevelAndAimTime,
  getRangeModifier,
  calculateStanceModifiers,
  calculateSituationModifiers,
  getTargetSizeModifier,
} from './appCalc';

import './App.css';

type State = {
  page: number;
  level: number;
  aims: number;
  range: number;
  stance: string;
  braced: boolean;
  hipFire: boolean;
  rifleOneHand: boolean;
  pistolOneHand: boolean;
  foldedStock: boolean;
  bipodNotBraced: boolean;
  bipodMount: boolean;
  targetSize: string;
};

type Props = {
  // handleUpdatePage: Function;
};

class App extends Component<Props, State> {
  state: State = {
    page: 1,
    level: 0,
    aims: 1,
    range: 1,
    stance: 'standing',
    braced: false,
    hipFire: false,
    rifleOneHand: false,
    pistolOneHand: false,
    foldedStock: false,
    bipodNotBraced: false,
    bipodMount: false,
    targetSize: 'standing',
  };

  handleUpdatePage = (value: number): void => {
    const { page } = this.state;
    this.setState({ page: page + value });
  };

  updateState = (key: string, value: unknown) => (prevState: State): State => ({
    ...prevState,
    [key]: value,
  });

  handleUpdateStateValue = (key: string, value: unknown): void => {
    this.setState(this.updateState(key, value));
  };

  render(): JSX.Element {
    const {
      page,
      level,
      aims,
      range,
      stance,
      braced,
      hipFire,
      rifleOneHand,
      pistolOneHand,
      foldedStock,
      bipodNotBraced,
      bipodMount,
      targetSize,
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {page > 1 && (
            <button
              type="button"
              className="navBtn prevPage"
              onClick={(): void => this.handleUpdatePage(-1)}
            >
              &#8592;
            </button>
          )}
          <div className="appHeading">PCCS Firing Range</div>
          {page < 6 && (
            <button
              type="button"
              className="navBtn nextPage"
              onClick={(): void => this.handleUpdatePage(1)}
            >
              &#8594;
            </button>
          )}
        </header>
        <div className="App-body">
          {page === 1 && (
            <Shooter
              level={level}
              aims={aims}
              handleUpdateStateValue={this.handleUpdateStateValue}
            />
          )}
          {page === 2 && (
            <Range
              range={range}
              handleUpdateStateValue={this.handleUpdateStateValue}
            />
          )}
          {page === 3 && (
            <Stance
              stance={stance}
              braced={braced}
              handleUpdateStateValue={this.handleUpdateStateValue}
            />
          )}
          {page === 4 && (
            <Situation
              hipFire={hipFire}
              rifleOneHand={rifleOneHand}
              pistolOneHand={pistolOneHand}
              foldedStock={foldedStock}
              bipodNotBraced={bipodNotBraced}
              bipodMount={bipodMount}
              handleUpdateStateValue={this.handleUpdateStateValue}
            />
          )}
          {page === 5 && (
            <TargetSize
              targetSize={targetSize}
              handleUpdateStateValue={this.handleUpdateStateValue}
            />
          )}
          {page === 6 && (
            <Shooting
              levelAndAimTimeModifier={calculateLevelAndAimTime(level, aims)}
              rangeModifier={getRangeModifier(range)}
              stanceModifier={calculateStanceModifiers(stance, braced)}
              situationModifier={calculateSituationModifiers([
                hipFire,
                rifleOneHand,
                pistolOneHand,
                foldedStock,
                bipodNotBraced,
                bipodMount,
              ])}
              targetModifier={getTargetSizeModifier(targetSize)}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
