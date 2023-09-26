// a scatterplot from penguin data

// text font-size
const labelSize = "16px"

// width
var chartWidth = 800
var chartHeight = 600

// margins
const marginTop = 40 // top margin, in pixels
const marginRight = 10 // right margin, in pixels
const marginBottom = 50 // bottom margin, in pixels
const marginLeft = 40 // left margin, in pixels
const rangeMult = 0.02

// ranges
const xRange = [marginLeft, chartWidth - marginRight] // [left, right]
const yRange = [chartHeight - marginBottom, marginTop] // [bottom, top]

// values
const X = d3.map(penguins, d => d.body_mass_g)
const Y = d3.map(penguins, d => d.flipper_length_mm)

// domains
const xDomain = [0, d3.max(X) + d3.max(X)*rangeMult]
const yDomain = [0, d3.max(Y) + d3.max(Y)*rangeMult]

// scale
const xScale = d3.scaleLinear(xDomain, xRange)
const yScale = d3.scaleLinear(yDomain, yRange)

// axes
const xAxis = d3.axisBottom(xScale)
const yAxis = d3.axisLeft(yScale)

// initiate svg 
svg = d3.select("#mychart")
  .append("svg")
  .attr("width", `${chartWidth}px`)
  .attr("height", `${chartHeight}px`)
  .attr("viewBox", [0, 0, chartWidth, chartHeight])
  .attr("id", "svgscatter")
  .attr("style", `max-width: 100%`)

// append x axis
svg.append("g")
        .attr("transform", `translate(0,${chartHeight - marginBottom})`)
        .attr("class", "xaxis")
        .call(xAxis)
        .call(
          g => g.append("text")
            .attr("x", chartWidth)
            .attr("y", marginBottom - 4)
            .attr("font-size", labelSize)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text("Body Mass [g]")
          )

// append y axis
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .attr("class", "yaxis")
    .call(yAxis)
    .call(
      g => g.append("text")
        .attr("x", -marginLeft)
        .attr("y", marginTop - 10)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("font-size", labelSize)
        .text("Flipper Length [mm]")
      )

