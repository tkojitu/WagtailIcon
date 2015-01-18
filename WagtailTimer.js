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

function appendNeedle(owner, dim) {
  var needle = {
    x: dim.w / 2 - 10 / 2,
    y: dim.r / 4,
    w: 10,
    h: dim.r,
    color: "red"
  };
  appendRect(owner, needle);
  var shadow = makeShadow(needle);
  appendRect(owner, shadow);
}

function makeShadow(needle) {
  return {
    x: needle.x + needle.w,
    y: needle.y,
    w: needle.w / 2,
    h: needle.h,
    color: "orange"
  };
}

function appendRect(owner, rect) {
  owner.append("rect")
    .attr("x", rect.x)
    .attr("y", rect.y)
    .attr("width", rect.w)
    .attr("height", rect.h)
    .attr("stroke", rect.color)
    .attr("fill", rect.color);
}

function onLoad() {
  var dim = getDimension();
  var svg = newSvg(dim);
  appendRect(svg, dim);
  var center = initCenter(svg, dim);
  appendUpperHalf(center, dim);
  appendLowerHalf(center, dim);
  appendNeedle(svg, dim);
}

window.addEventListener("load", onLoad, false);
