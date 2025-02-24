class groupedChart {
    constructor(config) {
        this.data = config.data;
        this.chartHeight = config.chartHeight || 300;
        this.chartWidth = config.chartWidth || 400;
        this.barWidth = config.barWidth || 10;
        this.margin = config.margin || 15;
        this.axisThickness = config.axisThickness || 2;
        this.chartPosX = config.chartPosX || 50;
        this.chartPosY = config.chartPosY || 400;
        this.axisColour = config.axisColour || color(255, 204, 0);
        this.barColour = config.barColour || color(0, 200, 50);
        this.axisTextColour = config.axisTextColour || color(125);
        this.xValue = config.xValue || "Age_Group";
        this.yValues = config.yValues || ["Female", "Male"];
        this.yTotal = config.yTotal || "Total";
        
        this.cleanData();
        this.calculateScaler();
        this.calculateGap();
    }

    cleanData() {
        this.cleanedData = [];
        for (let i = 0; i < this.data.rows.length; i++) {
            this.cleanedData.push(this.data.rows[i].obj);
        }
        for (let i = 0; i < this.cleanedData.length; i++) {
            this.cleanedData[i].Female = parseInt(this.cleanedData[i].Female);
            this.cleanedData[i].Male = parseInt(this.cleanedData[i].Male);
            this.cleanedData[i].Total = parseInt(this.cleanedData[i].Total);
        }
    }

    calculateScaler() {
        let maxValues = this.yValues.map(value => max(this.cleanedData.map(row => row[value])));
        let maxValue = max(maxValues);
        this.scaler = this.chartHeight / maxValue;
    }

    calculateGap() {
        this.gap = (this.chartWidth - (this.cleanedData.length * this.yValues.length) - (this.margin * 2)) / (this.cleanedData.length - 1);
    }

    drawChart() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight); // Y-axis
        line(0, 0, this.chartWidth, 0); // X-axis

        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.cleanedData.length; i++) {
            push();
            translate((this.gap + (this.barWidth * 2)) * i, 0);
            for (let j = 0; j < this.yValues.length; j++) {
                fill(random(255));
                rect(this.barWidth * j, 0, this.barWidth, -this.cleanedData[i][this.yValues[j]] * this.scaler);
            }
            pop();
        }
        pop();

        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.cleanedData.length; i++) {
            push();
            translate(this.gap * i, 0);

            push();
            for (let j = 0; j < this.yValues.length; j++) {
                fill(random(100, 255));
                noStroke();
                rect(0, 0, this.barWidth, -this.cleanedData[i][this.yValues[j]] * this.scaler);
                translate(0, -this.cleanedData[i][this.yValues[j]] * this.scaler);
            }
            pop();

            fill(this.axisTextColour);
            noStroke();
            textAlign(LEFT, CENTER);
            textSize(8);
            push();
            translate((this.barWidth / 2), 10);
            rotate(60);
            text(this.cleanedData[i][this.xValue], 0, 0);
            pop();
            pop();
        }
        pop();
        pop();
    }
}

// --- Main Sketch File ---


function preload() {
    data = loadTable('data/Combined.csv', 'csv', 'header');
}

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noLoop();
    
    groupedChart = new groupedChart({
        data: data,
        chartHeight: 300,
        chartWidth: 400,
        barWidth: 10,
        margin: 15,
        axisThickness: 2,
        chartPosX: 50,
        chartPosY: 400,
        axisColour: color(255, 204, 0),
        barColour: color(0, 200, 50),
        axisTextColour: color(125),
        xValue: "Age_Group",
        yValues: ["Female", "Male"],
        yTotal: "Total"
    });
}

function draw() {
    background(0);
    groupedChart.drawChart();
}
