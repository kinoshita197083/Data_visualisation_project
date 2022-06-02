// // set the dimensions and margins of the graph
// var margin = { top: 10, right: 30, bottom: 30, left: 60 },
//     width2 = 660 - margin.left - margin.right,
//     height2 = 500 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg2 = d3.select("#lineChart1")
//     .append("svg")
//     .attr("width", width2 + margin.left + margin.right)
//     .attr("height", height2 + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");

// //Read the data
// d3.csv("https://raw.githubusercontent.com/kinoshita197083/Data_visualisation_project/master/US_COVID.csv", function (data) {

//     // Add X axis --> it is a date format
//     var x = d3.scaleLinear()
//         .domain([1, 100])
//         .range([0, width2]);
//     svg2.append("g")
//         .attr("transform", "translate(0," + height2 + ")")
//         .call(d3.axisBottom(x));

//     // Add Y axis
//     var y = d3.scaleLinear()
//         .domain([0, 13])
//         .range([height2, 0]);
//     svg2.append("g")
//         .call(d3.axisLeft(y));

//     // This allows to find the closest X index of the mouse:
//     var bisect = d3.bisector(function (d) { return d.date; }).left;

//     // Create the circle that travels along the curve of chart
//     var focus = svg2
//         .append('g')
//         .append('circle')
//         .style("fill", "none")
//         .attr("stroke", "black")
//         .attr('r', 8.5)
//         .style("opacity", 0)

//     // Create the text that travels along the curve of chart
//     var focusText = svg2
//         .append('g')
//         .append('text')
//         .style("opacity", 0)
//         .attr("text-anchor", "left")
//         .attr("alignment-baseline", "middle")

//     // Add the line
//     svg2
//         .append("path")
//         .datum(data)
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("stroke-width", 1.5)
//         .attr("d", d3.line()
//             .x(function (d) { return x(d.date) })
//             .y(function (d) { return y(d.new_cases) })
//         )

//     // Create a rect on top of the svg area: this rectangle recovers mouse position
//     svg2
//         .append('rect')
//         .style("fill", "none")
//         .style("pointer-events", "all")
//         .attr('width', width2)
//         .attr('height', height2)
//         .on('mouseover', mouseover)
//         .on('mousemove', mousemove)
//         .on('mouseout', mouseout);


//     // What happens when the mouse move -> show the annotations at the right positions.
//     function mouseover() {
//         focus.style("opacity", 1)
//         focusText.style("opacity", 1)
//     }

//     function mousemove() {
//         // recover coordinate we need
//         var x0 = x.invert(d3.mouse(this)[0]);
//         var i = bisect(data, x0, 1);
//         selectedData = data[i]
//         focus
//             .attr("cx", x(selectedData.x))
//             .attr("cy", y(selectedData.y))
//         focusText
//             .html("x:" + selectedData.x + "  -  " + "y:" + selectedData.y)
//             .attr("x", x(selectedData.x) + 15)
//             .attr("y", y(selectedData.y))
//     }
//     function mouseout() {
//         focus.style("opacity", 0)
//         focusText.style("opacity", 0)
//     }

// })




/////////////////////////////////////////////////////////////////////////////



// // set the dimensions and margins of the graph
// var margin = { top: 10, right: 30, bottom: 30, left: 60 },
//     width2 = 660 - margin.left - margin.right,
//     height2 = 500 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svg2 = d3.select("#lineChart1")
//     .append("svg")
//     .attr("width", width2 + margin.left + margin.right)
//     .attr("height", height2 + margin.top + margin.bottom)
//     .append("g")
//     .attr("transform",
//         "translate(" + margin.left + "," + margin.top + ")");





// Initialize the X axis
// var x2 = d3.scaleBand()
//     .range([0, width2])
//     .padding(0.2);
// var xAxis2 = svg2.append("g")
//     .attr("transform", "translate(0," + height2 + ")")


// Initialize the Y axis
// var y2 = d3.scaleLinear()
//     .range([height2, 0]);
// var yAxis2 = svg2.append("g")
//     .attr("class", "myYaxis")






//Read the data
// d3.csv("https://raw.githubusercontent.com/kinoshita197083/Data_visualisation_project/master/US_COVID.csv", function (data) {

//     // Add X axis --> it is a date format
//     var x2 = d3.scaleTime()
//         .domain(d3.extent(data.map(function (d) { return new Date(d.date); })))
//         .range([0, width2]);
//     xAxis2 = svg2.append("g")
//         .attr("transform", "translate(0," + height2 + ")")
//         .call(d3.axisBottom(x2));

//     // X axis
//     // x2.domain(data.map(function (d) { return new Date(d.date); }))
//     // xAxis2.transition().duration(1000).call(d3.axisBottom(x2));



//     // Add Y axis
//     var y2 = d3.scaleLinear()
//         .domain([0, d3.max(data, function (d) { return +d.new_cases; })])
//         .range([height2, 0]);
//     yAxis2 = svg2.append("g")
//         .call(d3.axisLeft(y2));

//     // Add Y axis
//     // y2.domain([0, d3.max(data, function (d) { return d.new_cases })]);
//     // yAxis2.transition().duration(1000).call(d3.axisLeft(y2));



//     // This allows to find the closest X index of the mouse:
//     var bisect = d3.bisector(function (d) { return d.date; }).left;

//     // Create the circle that travels along the curve of chart
//     var focus = svg2
//         .append('g')
//         .append('circle')
//         .style("fill", "none")
//         .attr("stroke", "black")
//         .attr('r', 8.5)
//         .style("opacity", 0)

//     // Create the text that travels along the curve of chart
//     var focusText = svg2
//         .append('g')
//         .append('text')
//         .style("opacity", 0)
//         .attr("text-anchor", "left")
//         .attr("alignment-baseline", "middle")

//     // Add the line
//     svg2
//         .append("path")
//         .datum(data)
//         .attr("fill", "none")
//         .attr("stroke", "steelblue")
//         .attr("stroke-width", 1.5)
//         .attr("d", d3.line()
//             .x(function (d) { return x(data.map(function (d) { return new Date(d.date); })) })
//             .y(function (d) { return y(d.new_cases) })
//         )

//     // Create a rect on top of the svg area: this rectangle recovers mouse position
//     svg2
//         .append('rect')
//         .style("fill", "none")
//         .style("pointer-events", "all")
//         .attr('width', width2)
//         .attr('height', height2)
//         .on('mouseover', mouseover)
//         .on('mousemove', mousemove)
//         .on('mouseout', mouseout);


//     // What happens when the mouse move -> show the annotations at the right positions.
//     function mouseover() {
//         focus.style("opacity", 1)
//         focusText.style("opacity", 1)
//     }

//     function mousemove() {
//         // recover coordinate we need
//         var x0 = x2.invert(d3.mouse(this)[0]);
//         var i = bisect(data, x0, 1);
//         selectedData = data[i]
//         focus
//             .attr("cx", x(selectedData.x))
//             .attr("cy", y(selectedData.y))
//         focusText
//             .html("x:" + selectedData.x + "  -  " + "y:" + selectedData.y)
//             .attr("x", x(selectedData.x) + 15)
//             .attr("y", y(selectedData.y))
//     }
//     function mouseout() {
//         focus.style("opacity", 0)
//         focusText.style("opacity", 0)
//     }

// })


///////////////////////////////////////////////////////////////////


// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    width2 = 560 - margin.left - margin.right,
    height2 = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#lineChart1")
    .append("svg")
    .attr("width", width2 + margin.left + margin.right)
    .attr("height", height2 + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("https://raw.githubusercontent.com/kinoshita197083/Data_visualisation_project/master/US_COVID.csv",

    // When reading the csv, I must format variables:
    function (d) {
        return { date: d3.timeParse("%Y-%m-%d")(d.date), icu_patients: d.icu_patients }
    },

    // Now I can use this dataset:
    function (data) {

        // Add X axis --> it is a date format
        var x = d3.scaleTime()
            .domain(d3.extent(data, function (d) { return d.date; }))
            .range([0, width2]);
        xAxis = svg2.append("g")
            .attr("transform", "translate(0," + height2 + ")")
            .call(d3.axisBottom(x));

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.icu_patients; })])
            .range([height2, 0]);
        yAxis = svg2.append("g")
            .call(d3.axisLeft(y));

        // Add a clipPath: everything out of this area won't be drawn.
        var clip = svg2.append("defs").append("svg:clipPath")
            .attr("id", "clip")
            .append("svg:rect")
            .attr("width", width2)
            .attr("height", height2)
            .attr("x", 0)
            .attr("y", 0);

        // Add brushing
        var brush = d3.brushX()                   // Add the brush feature using the d3.brush function
            .extent([[0, 0], [width2, height2]])  // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
            .on("end", updateChart)               // Each time the brush selection changes, trigger the 'updateChart' function

        // Create the line variable: where both the line and the brush take place
        var line = svg2.append('g')
            .attr("clip-path", "url(#clip)")

        // Add the line
        line.append("path")
            .datum(data)
            .attr("class", "line")  // I add the class line to be able to modify this line later on.
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function (d) { return x(d.date) })
                .y(function (d) { return y(d.icu_patients) })
            )

        // Add the brushing
        line
            .append("g")
            .attr("class", "brush")
            .call(brush);

        // A function that set idleTimeOut to null
        var idleTimeout
        function idled() { idleTimeout = null; }

        // A function that update the chart for given boundaries
        function updateChart() {

            // What are the selected boundaries?
            extent = d3.event.selection

            // If no selection, back to initial coordinate. Otherwise, update X axis domain
            if (!extent) {
                if (!idleTimeout) return idleTimeout = setTimeout(idled, 350); // This allows to wait a little bit
                x.domain([4, 8])
            } else {
                x.domain([x.invert(extent[0]), x.invert(extent[1])])
                line.select(".brush").call(brush.move, null) // This remove the grey brush area as soon as the selection has been done
            }

            // Update axis and line position
            xAxis.transition().duration(1000).call(d3.axisBottom(x))
            line
                .select('.line')
                .transition()
                .duration(1000)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.date) })
                    .y(function (d) { return y(d.icu_patients) })
                )
        }

        // If user double click, reinitialize the chart
        svg2.on("dblclick", function () {
            x.domain(d3.extent(data, function (d) { return d.date; }))
            xAxis.transition().call(d3.axisBottom(x))
            line
                .select('.line')
                .transition()
                .attr("d", d3.line()
                    .x(function (d) { return x(d.date) })
                    .y(function (d) { return y(d.icu_patients) })
                )
        });

    })