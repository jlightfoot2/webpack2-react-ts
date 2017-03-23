/**
 * adapted from https://codepen.io/VicM/pen/NPGqwr
 */
var d3 = require('d3');

var ns: any = {};
ns.tickLine = null;
ns.tickCircle = null;
ns.tickMark = null;
ns.tickPosition = 0.0;
ns.width = 500;
ns.chart_w = ns.width - 20;
ns.svg = null;

ns.create = function (el, props, state) {
  ns.width = state.width;
  ns.chart_w = ns.width;
  var scales = ns._scales(el, state.domain);
  var gauge_h = 60;

  var chart_y_pos = 5;

  var result = state.data;

  this.tickPosition = scales.x(result);

  var text_margins = {top: chart_y_pos + gauge_h + 35, right: 10, bottom: 0, left: 10};

  var svg = d3.select(el).select('svg')
  .attr('width', ns.width)
  .attr('height', '100%');
  ns.svg = svg;
  var gradient = svg.append('svg:defs')
    .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '100%')
      .attr('y2', '0%')
      .attr('spreadMethod', 'pad');

  gradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#c00')
      .attr('stop-opacity', 1);

  gradient.append('svg:stop')
      .attr('offset', '50%')
      .attr('stop-color', 'yellow')
      .attr('stop-opacity', 1);

  gradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#0c0')
      .attr('stop-opacity', 1);

  svg.append('g')
    .append('rect')
    .attr('x', 0)
    .attr('y', chart_y_pos)
    .attr('width', '100%')

    .attr('height', gauge_h)
    .style('fill', 'url(#gradient)');

  /****************************************
  * Text, titles
  *****************************************/

  // Left indicator
  svg.append('g')
    .append('text')
    .attr('x', 0)
    .attr('y', text_margins.top)
    .text('Low');

  svg.append('g')
    .append('text')
    .attr('x', ns.width / 2)
    .attr('y', text_margins.top)
    .attr('text-anchor', 'middle')
    .text('Moderate');

  // Right indicator

  svg.append('g')
    .append('text')
    .classed('rightPrcnt', true)
    .attr('x', ns.width)
    .attr('y', text_margins.top)
    .attr('text-anchor', 'end')
    .text('High');

  /****************************************
  * Result
  *****************************************/

  this.tickMark = svg.append('g')
      .attr('transform', 'translate(10,0)' );

  this.tickLine = this.tickMark.append('line')
          .attr('x2', 0)
          .attr('x1', 0)
        .attr('y1', chart_y_pos - 5)

        .attr('y2', gauge_h + chart_y_pos + 5)
        .attr('stroke-width', 3)
        .attr('stroke', 'black');

  this.tickCircle = this.tickMark.append('circle')
    .attr('cy', (gauge_h + chart_y_pos+5) / 2)
    .attr('cx', 0)
      .attr('fill', 'grey')
    .attr('r', 10);

  this.update(el, state);
};

ns.update = function (el, state) {
  ns.width = state.width;
  ns.svg.attr('width', ns.width);
  var scales = this._scales(el, state.domain);
  //var prevScales = this._scales(el, state.prevDomain);
  this.tickPosition = scales.x(state.data);

  this.tickMark
        .transition()
        .duration(2000)
        .delay(500)
        .attr('transform', 'translate(' + this.tickPosition + ',0)')
        ;
};

ns._scales = function (el, domain) {
  if (!domain) {
    return null;
  }

  var width = ns.width;

  var height = el.offsetHeight;

  var x = d3.scaleLinear()
    .range([0, width])
    .domain(domain.x);

  var y = d3.scaleLinear()
    .range([height, 0])
    .domain(domain.y);

  var z = d3.scaleLinear()
    .range([5, 20])
    .domain([1, 10]);

  return {x: x, y: y, z: z};
};

ns.destroy = function (el) {

};

export default ns as any;

