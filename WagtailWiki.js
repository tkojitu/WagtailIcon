function toRadians(n) {
  return (n * Math.PI) / 180.0;
}

function getDimension() {
  return {
    w: 512,
    h: 512,
    r: 240
  };
}

function newSvg(dim) {
  return d3.select("body").append("svg")
    .attr("width", dim.w)
    .attr("height", dim.h)
    .attr("stroke", "gray")
    .attr("stroke-width", 1)
    .attr("fill", "white");
}

function appendRect(svg, dim) {
  svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", dim.w)
    .attr("height", dim.h);
}

function initCenter(svg, dim) {
  return svg.append("g")
    .attr("transform", "translate(" + (dim.w / 2) + "," + (dim.h / 2) + ")");
}

function appendUpperHalf(owner, dim) {
  var arc = getArc(dim, 90, -90);
  owner.append("path")
    .attr("d", arc)
    .attr("stroke", "black")
    .attr("fill", "black");
}

function appendLowerHalf(owner, dim) {
  var arc = getArc(dim, 90, 270);
  owner.append("path")
    .attr("d", arc)
    .attr("stroke", "gray")
    .attr("fill", "white");
}

function getArc(dim, startDeg, endDeg) {
  return d3.svg.arc()
    .innerRadius(0)
    .outerRadius(dim.r)
    .startAngle(toRadians(startDeg))
    .endAngle(toRadians(endDeg));
}

function appendLetter(owner, letter) {
  owner.append("text")
    .attr("x", 155)
    .attr("y", 425)
    .text(letter)
    .attr("font-family", "Crimson Text")
    .attr("font-size", "192px")
    .attr("fill", "black");
}

function onLoad() {
  var dim = getDimension();
  var svg = newSvg(dim);
  appendRect(svg, dim);
  var center = initCenter(svg, dim);
  appendUpperHalf(center, dim);
  appendLowerHalf(center, dim);
  appendLetter(svg, "W");
}

window.addEventListener("load", onLoad, false);
