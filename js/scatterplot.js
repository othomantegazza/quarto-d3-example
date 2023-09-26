d3.csv(
  "https://raw.githubusercontent.com/allisonhorst/palmerpenguins/main/inst/extdata/penguins.csv", function(d) {

    console.log({ciao: "ciao", d: d})

    svg = d3.select("#mychart")
      .append("svg")
      .attr("width", "1000px")
      .attr("height", "700px")
  }

)

  

