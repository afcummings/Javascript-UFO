var tableData = data;

var tbody = d3.select("tbody");

function createTable(data){
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        var row = tbody.append("tr");

       //console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           var cell = row.append("td");
           cell.text(val);
       });
    });
}

function handleClick(){
    d3.event.preventDefault()
    
    var date = d3.select("#datetime").property("value");
    var filteredData = tableData;

    if (date){
        filteredData = filteredData.filter((row) => row.datetime === date);

    }

    createTable(filteredData);
}



d3.selectAll("#filter-btn").on("click", handleClick);
createTable(tableData);