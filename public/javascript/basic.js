var numberScale = d3.scaleLinear().domain([1, 10]).range([1, 10]);
var powerScale = d3.scalePow().exponent(2);
var logScale = function (d) {
    return d3.scaleLog()(d).toFixed(4);
};
var roundedLogScale = d3.scaleLog().rangeRound([0, 1]);

var loadTable = function(data){
	var trs = d3.select(".table_container").selectAll("tr").data(data);
	trs.enter().append("tr").append("th")
		.attr("class","rows")
		.text(function(n){ return n });
}

var bindDataToChildPositionAndAppendTd = function(childPosition,data,scale){
	let dataToShow = data.map(function(eachValue){ return scale(eachValue)});
	let tds = d3.select(".table_container > tr:nth-child("+ childPosition +")").selectAll("td").data(dataToShow);
	tds.enter().append("td")
		.text(function(d){return d});
}

var show = function(){
	var numbers = [1,2,3,4,5,6,7,8,9,10];
	var rows = ["Title","n","n square","log(n)","log(n) rounded"];
	var scalesAccordingToRows = [numberScale,numberScale,powerScale,logScale,roundedLogScale];

	loadTable(rows);
	scalesAccordingToRows.forEach(function(eachScale,index){
		bindDataToChildPositionAndAppendTd(index+1, numbers, eachScale);
	});
} 
window.onload = show;