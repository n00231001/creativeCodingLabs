class lineChart {
    constructor(obj) {
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;

        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 450;
        this.chartPosY = obj.chartPosY || 350;

        this.axisColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255);

        this.yValues = ["Female", "Male"];
        this.xValue = "Age_Group";
        this.yTotal = "Total";

        // Fix scaling to handle total values for Female and Male
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin * 2)) / (this.data.length - 1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yValues[0]] + row[this.yValues[1]])));
    }

    // renders the axis lines
    renderAxisBars() {
        push();
        translate(this.chartPosX, this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line(0, 0, 0, -this.chartHeight);      // vertical axis
        line(0, 0, this.chartWidth, 0);        // horizontal axis
        pop();
    }

    // renders the line chart and data points
    renderBars() {
        push();
        translate(this.chartPosX, this.chartPosY);

        // Draw the line for the data
        beginShape();
        for (let i = 0; i < this.data.length; i++) {
            let xPos = (this.barWidth + this.gap) * i;
            stroke(this.barColour);
            strokeWeight(1);
            noFill();
            vertex(xPos, -this.data[i][this.yValue] * this.scaler);

            // Draw points on the line (red)
            stroke(255, 0, 0);
            strokeWeight(5);
            ellipse(xPos, -this.data[i][this.yValue] * this.scaler, 10, 10);
        }
        endShape();

        pop();
    }
    renderLabels(){
        push()
        push();
        translate(this.chartPosX,this.chartPosY);
        for(let i = 0; i<this.data.length; i++) {
            let xPos = i*(this.barWidth + this.gap);
            fill(this.barColour)
        
            push()
                textSize(15);
                fill(255);
                stroke(0);
                strokeWeight(1);
                textAlign(LEFT,CENTER)
                push()
                    translate(xPos + (this.barWidth/2), 10)
                    rotate(70)
                    text(this.data[i][this.xValue],0, 0);
                pop()
            pop()
        }
        pop()
    let femaleScores = cleanedData.map(row => row.Female)
    let ageGroups = cleanedData.map(row => row.ageGroup)
 
    console.log(femaleScores, ageGroups)
    }
   
    renderTicks(){
        push();
        translate(this.chartPosX, this.chartPosY)
        noFill()
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        let tickIncrements = this.chartHeight/5;
        for(let i = 0; i<=5; i++){
            line (0, -tickIncrements*i, -10, -tickIncrements*i)
        }
        pop();
    }
}
