class pyramidChart {
    constructor(obj){
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 50;
        this.chartPosY = obj.chartPosY || 350;

        this.barsPosX = obj.barsPosX || 50;
        this.barsPosY = obj.barsPosY || 100;

        this.axisColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255);

        this.yValues = ["Female", "Male"];
        this.xValue = "Age_Group";
        this.yTotal = "Total"
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yValues[0]] + row[this.yValues[1]])));
    }
    renderAxisBars(){
        push();
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartWidth);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
        pop();
 
        let femaleScores = cleanedData.map(row => row.Female)
        let ageGroups = cleanedData.map(row => row.ageGroup)
 
        console.log(femaleScores, ageGroups)
        }

        renderBars() {
            push()
            translate(this.barsPosX, this.barsPosY)
            for(let i = 0; i<this.data.length; i++) {
              let yPos = i*(this.barWidth + this.gap)

              let femaleScores = this.data[i][this.yValues[0]]
              fill(255,0,0)
              rect(0, yPos, femaleScores * this.scaler, this.barWidth);

              let maleData = this.data[i][this.yValues[1]]
              fill(0,0,255)
              rect(-maleData * this.scaler, yPos, maleData * this.scaler, this.barWidth);
            //   strokeWeight(this.axisThickness);
            //   rect (yPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler);
            //   line (0,0, this.chartWidth, 0);
              
              }
         
          pop()
        }
            // push();
            // translate(this.barsPosX, this.barsPosY);
        
            // for (let i = 0; i < this.data.length; i++) { 
            //     let yPos = i * (this.barWidth + this.gap); // Move bars along Y-axis
            //     push();
            //     translate(0, yPos);
        
            //     for (let j = 0; j < this.yValues.length; j++) { 
            //         let value = this.data[i][this.yValues[j]];
            //         if (value !== undefined) {  
            //             fill(random(100, 255));
            //             noStroke();
                        
            //             // Draw horizontal bars
            //             rect(0, 0, value * this.scaler, this.barWidth);
            //             translate(value * this.scaler, 0); // Shift for stacked bars
            //         }
            //     }
            //     pop();
            // }
            // pop();
            renderLabels(){
              push()
              push();
              translate(this.chartPosX,this.chartPosY);
              for(let i = 0; i<this.data.length; i++) {
                  let xPos = i*(this.barWidth + this.gap);
                  fill(this.barColour)
                  rect(xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler)
              
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
        
                 
}