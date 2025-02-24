class pyramid2Chart {
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 10;
 
        this.axisThickness = obj.axisThickness || 1;
        this.chartPosX = obj.chartPosX || 650;
        this.chartPosY = obj.chartPosY || 800;
 
        this.gap = (this.chartHeight - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartWidth / (max(cleanedData.map(row => row[this.yValue])));
 
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColor = color(255);
        this.axisTextColour = color(255);
 
        this.numTicks = 5;
        this.tickLength = 10;
    }
 
    renderBars() {
        push();
            translate(this.chartPosX, this.chartPosY);
            push();
            translate(0, -this.margin);
           
            for (let i = 0; i < this.data.length; i++) {
                let yPos = (this.barWidth + this.gap) * i;
                fill(this.barColor);
                rect(0, -yPos, this.data[i][this.yValue] * this.scaler, this.barWidth);
            }
            for (let i = 0; i < this.data.length; i++) {
                let yPos = (this.barWidth + this.gap) * i;
                fill(this.barColor);
                rect(0, -yPos, this.data[i][this.yValue] * this.scaler, this.barWidth);
            }
 
            pop();
        pop();
    }
 
    renderAxisBars(){
   
        push();
     
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(255);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartHeight);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
       
       pop();
    }
 
    renderLabels() {
        push();
        translate(this.chartPosX, this.chartPosY);
        push();
        translate(this.margin, 0);
        for (let i = 0; i < this.data.length; i++) {
            let yPos = (this.barWidth + this.gap) * i;
 
            fill(this.axisTextColour);
            noStroke();
            textAlign(RIGHT, CENTER);
            textSize(12);
            push();
            translate(this.data[i][this.yValue] * this.scaler + 5, -yPos + this.barWidth / 2);
            text(this.data[i][this.xValue], 0, 0);
            pop();
        }
        pop();
        pop();
    }
 
    renderTicks() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
 
        let tickIncrement = this.chartWidth / this.numTicks;
        let tickValueIncrement = max(this.data.map(row => row[this.yValue])) / this.numTicks;
 
        fill(this.axisColour);
 
        for (let i = 0; i <= this.numTicks; i++) {
            let x = tickIncrement * i;
            line(x, 0, x, this.tickLength);
        }
 
        pop();
    }
}