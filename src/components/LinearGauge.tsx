import * as React from 'react';

import d3Chart from '../lib/LinearGauge';

export interface MyProps {
  width?: any,
  result: any,
  minScore: number,
  maxScore: number
}

export interface MyState {
  width: any,
  result: any,
  minScore: number,
  maxScore: number
}

export default class D3LinearaGauge extends React.Component<MyProps, MyState> {
  componentDidMount () {
   var el = this.refs['assessmentGauge'];
    console.log(d3Chart);
    
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState()); 
  }

  componentDidUpdate () {
     var el = this.refs['assessmentGauge'];
     d3Chart.update(el, this.getChartState());
  }

  getChartState () {
    const width = window.innerWidth
                                    || document.documentElement.clientWidth
                                    || document.body.clientWidth || 500;
    return {
      data: this.props.result,
      domain: {x: [this.props.minScore, this.props.maxScore], y: [0, 100]},
      width: this.props.width || width - 20

    };
  }

  componentWillUnmount () {
     var el = this.refs['assessmentGauge'];
     d3Chart.destroy(el);
  }

  render () {
    const {width} = this.props;

    return (
      <div style={{width: width, margin: 'auto auto auto auto'}} ref="assessmentGauge">
        <svg />
      </div>
    );
  }
}

