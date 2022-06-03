// The svg
var svg_map = d3.select("#map_dataviz"),
    width3 = +svg_map.attr("width"),
    height3 = +svg_map.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
    .scale(70)
    .center([0, 20])
    .translate([width3 / 2, height3 / 2]);

// Data and color scale
var data = d3.map();
var colorScale = d3.scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

// Load external data and boot
d3.queue()
    .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
    .defer(d3.csv, "https://raw.githubusercontent.com/kinoshita197083/Data_visualisation_project/master/owid-covid-data-clean-1.csv", function (d) { data.set(d.location, +d.new_cases); })
    .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv", function (d) { data.set(d.code, +d.pop); })
    .await(ready);

function ready(error, topo) {

    let mouseOver = function (d) {
        d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", .5)
        d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black")
    }

    let mouseLeave = function (d) {
        d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", .8)
        d3.select(this)
            .transition()
            .duration(200)
            .style("stroke", "transparent")
    }

    // Draw the map
    svg_map.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
        // draw each country
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        // set the color of each country
        // .attr("fill", function (d) {
        //     d.total = data.get(d.id) || 0;
        //     return colorScale(d.total);
        // })
        // .style("stroke", "transparent")
        // .attr("class", function (d) { return "Country" })
        // .style("opacity", .8)
        // .on("mouseover", mouseOver)
        // .on("mouseleave", mouseLeave)

        .attr("fill", function (d) {
            console.log(d);
            if (d.properties.name == d.location) {
                d.total = data.get(d.new_cases) || 0;
            }

            return colorScale(d.total);
        })
        .style("stroke", "transparent")
        .attr("class", function (d) { return "Country" })
        .style("opacity", .8)
        .on("mouseover", mouseOver)
        .on("mouseleave", mouseLeave)
}

function displayMapTip(name) {
    document.getElementById('map_label').firstChild.data = name;
}