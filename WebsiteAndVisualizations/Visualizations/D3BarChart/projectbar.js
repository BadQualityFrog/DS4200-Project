//Define data
let data = [
  { isMetro: 'True'    , healthcare: 12507.516754162865},
  { isMetro: 'False'    , healthcare: 13403.38451055953}
];

let width = 600, height = 400;

let margin = {top:50,bottom:50,left:70,right:50}

let svg = d3.select('body').append('svg').attr('height', height).attr('width',width)
.style('background','lightyellow')

let yScale = d3.scaleLinear().domain([0,15000]).range([height - margin.bottom, margin.top])
let yAxis = svg.append('g').call(d3.axisLeft().scale(yScale)).attr('transform',`translate(${margin.left},0)`)

let xScale = d3.scaleBand().domain(data.map(d => d.isMetro)).range([margin.left, width - margin.right]).padding(0.5)
let xAxis = svg.append('g').call(d3.axisBottom().scale(xScale)).attr('transform',`translate(0, ${height - margin.bottom})`)

svg.append('text').attr('x', width/2).attr('y', height-15).text('Metropole?').style('text-anchor', 'middle')

svg.append('text').attr('x',0-height/2).attr('y', 25).text('Average Annual Healthcare Cost')
.attr('transform','rotate(-90)').style('text-anchor', 'middle')

let bar = svg.selectAll('rect').data(data).enter()
.append('rect')
.attr('x', d => xScale(d.isMetro)).attr('y', d => yScale(d.healthcare))
.attr('width', xScale.bandwidth()).attr('height', d => height - margin.bottom - yScale(d.healthcare))
.attr('fill', 'steelblue');

bar
      .on('mouseover',function(){
        d3.select(this).transition().style('fill', 'red')
      })
      .on('mouseout',function(){
        d3.select(this).transition().style('fill', 'steelblue')
      })