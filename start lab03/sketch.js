let data;
let cleanedData = [];
let charts = [];

 
function preload(){
    data = loadTable('data/education.csv', 'csv', 'header')
}
 
function setup() {
    createCanvas(2000,1200);
    angleMode(DEGREES);
    noLoop();
    cleanData();

    charts.push(new barChart({
        data:cleanedData,
        xValue:"Field_of_Study",
        yValue:"starting_Salary",
        // chartHeight:400,
        // chartWidth:500,
        // barWidth:25,
        // aixsThickness:10,
        // margin:15,
        // chartPosX:50,
        // chartPosY:450
    }
    ));
    
    charts.push(new lineChart({
        data:cleanedData,
        xValue:"Field_of_Study",
        yValue:"starting_Salary",
        // chartHeight:400,
        // chartWidth:500,
        // barWidth:25,
        // aixsThickness:10,
        // margin:15,
        // chartPosX:600,
        // chartPosY:450
    }
    ));

     charts.push(new HorizontalChart({
        data:cleanedData,
        xValue:"Field_of_Study",
        yValue:"starting_Salary",
        // chartHeight:400,
        // chartWidth:500,
        // barWidth:25,
        // aixsThickness:10,
        // margin:15,
        // chartPosX:-650,
        // chartPosY:0
    }
    ));    
    
    charts.push(new pyramid2Chart({
        data:cleanedData,
        xValue:"Field_of_Study",
        yValue:"starting_Salary",
        // chartHeight:400,
        // chartWidth:500,
        // barWidth:25,
        // aixsThickness:10,
        // margin:15,
        // chartPosX:600,
        // chartPosY:950,
        // barsPosX:800,
        // barsPosY:550,

    }
    ));

    charts.push(new stackedChart({
        data:cleanedData,
        xValue:"Field_of_Study",
        yValue:"starting_Salary",
        // chartHeight:400,
        // chartWidth:500,
        // barWidth:25,
        // aixsThickness:10,
        // margin:15,
        // chartPosX:1200,
        // chartPosY:450
    }
    ));

   

    
    // charts.push(new pieChart({
    //     data:cleanedData,
    //     xValue:"Field_of_Study",
    //     yValue:"starting_Salary",
    //     chartHeight:400,
    //     chartWidth:500,
    //     barWidth:25,
    //     aixsThickness:10,
    //     margin:15,
    //     chartPosX:50,
    //     chartPosY:950,
    //     piePosY:750
    // }
    // ));

    

    // charts.push(new barChart({
    //     data:cleanedData,
    //     xValue:"Field_of_Study",
    //     yValue: "Male",
    //     chartHeight:400,
    //     chartWidth:500,
    //     barWidth:10,
    //     aixsThickness:10,
    //     margin:15,
    //     chartPosX: 500,
    //     chartPosY:950
    // }
   // ));
    //charts.push(new barChart(cleanedData,"Field_of_Study","Male", 400,400,10,15,2,500,450));
    //charts.push(new barChart(cleanedData,"Field_of_Study","Total", 400,800,30,25,2,50,900));
    
}
 
function draw(){

    background(69, 153, 255);
    charts.forEach(chart => {
        chart.renderAxisBars();
        chart.renderBars();
        chart.renderTicks();
        chart.renderLabels();
        
    });
}


    
function cleanData(){
    for (let i = 0; i < data.rows.length; i++) {
        cleanedData.push(data.rows[i].obj)
    }
 
    for (let i = 0; i < cleanedData.length; i++) {
        cleanedData[i].starting_Salary = parseInt(cleanedData[i].starting_Salary)
        cleanedData[i].Male = parseInt(cleanedData[i].Male)
        cleanedData[i].Total = parseInt(cleanedData[i].Total)
    }
}
 
