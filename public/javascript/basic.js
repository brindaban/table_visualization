var numberScale = d3.scaleLinear().domain([1, 10]).range([1, 10]);
var powerScale = d3.scalePow().exponent(2);
var logScale = function (d) {
    return d3.scaleLog()(d).toFixed(4);
};
var roundedLogScale = d3.scaleLog().rangeRound([0, 1]);

var loadTable = function(data){
	let trs = d3.select(".table_container").selectAll("tr").data(data);
	trs.enter().append("tr").append("th")
		.attr("class","rows")
		.text(function(n){ return n });
}

var populateDataAccordingToRows = function(rowsPosition,data,scale){
	let dataToShow = data.map(function(eachValue){ return scale(eachValue)});
	let tds = d3.select(".table_container > tr:nth-child("+ rowsPosition +")").selectAll("td").data(dataToShow);
	tds.enter().append("td")
		.text(function(d){return d});
}

var show = function(){
	let numbers = [1,2,3,4,5,6,7,8,9,10];
	let scalesAccordingToRows = {"Title":numberScale, "n":numberScale, "n square":powerScale, "log(n)":logScale, "log(n) rounded":roundedLogScale};
	let allRows = Object.keys(scalesAccordingToRows); 

	loadTable(allRows);
	for(let eachRow in scalesAccordingToRows)
		populateDataAccordingToRows(allRows.indexOf(eachRow)+1, numbers, scalesAccordingToRows[eachRow])
} 
window.onload = show;