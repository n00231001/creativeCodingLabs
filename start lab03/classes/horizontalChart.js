class HorizontalChart {
    constructor(obj) {
        this.data = obj.data;
        this.xValue = obj.xValue;
        this.yValue = obj.yValue;
        this.chartHeight = obj.chartHeight || 400;
        this.chartWidth = obj.chartWidth || 400;
        this.barWidth = obj.barWidth || 20;
        this.margin = obj.margin || 10;
 
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 100;
        this.chartPosY = obj.chartPosY || 1000;
 
        this.gap = (this.chartHeight - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartWidth / (max(cleanedData.map(row => row[this.yValue])));
 
        this.axisColour = color(255);
        this.axisTickColour = color(255);
        this.barColor = color(253, 48, 48);
        this.axisTextColour = color(255);
        
        this.chartTitle = obj.chartTitle || "horizontal chart";

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
        translate(0, this.margin); // Add margin to the left side
    
        // Calculate the vertical spacing to position labels evenly along the y-axis
        let tickSpacing = -this.chartHeight / this.data.length;
    
        // Loop through the data and place the labels along the y-axis
        for (let i = 0; i < this.data.length; i++) {
            // Calculate the y position of the label along the y-axis
            let yPos = i * tickSpacing;
    
            // adds labels along vertically
            fill(this.axisTextColour);
            noStroke();
            // Align text to the right of the axis
            textAlign(RIGHT, CENTER);  
            textSize(15);
            rotate()
            //adds labels vertically
            text(this.data[i][this.xValue], -5, yPos); 
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
    
    renderTitles() {
        push();
        translate(this.chartPosX,this.chartPosY - this.chartHeight - 30);
        fill(this.axisTextColour);
        textSize(20);
        textAlign(CENTER,CENTER);
        //textFont(font);
        text(this.chartTitle,250,0);
        pop();
    }
}