import * as d3 from 'd3';

let contanerEl, svg;

function init(containerEl, props) {

 const { width, height } = props;

 svg = d3.select(containerEl)
  .append('svg')
  .attr('width', width)
  .attr('height', height);
 
 // init other d3 elements here

}

function update(props) { /*...*/ }

function resize(width, height) { /*...*/ }

export default { init, resize, update };