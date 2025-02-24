class stackedChart {
    constructor(obj){
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 20;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 800;
        this.chartPosY = obj.chartPosY || 350;

        this.axisColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255);

        this.yValues = ["Female", "Male"];
        this.xValue = "Age_Group";
        this.yTotal = "Total"
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yValues[0]] + row[this.yValues[1]])));

    }
    //renders the lines the graph is drawn on
    renderAxisBars(){
        push();
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartHeight);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
        pop();
 
        let femaleScores = cleanedData.map(row => row.Female)
        let ageGroups = cleanedData.map(row => row.ageGroup)
 
        console.log(femaleScores, ageGroups)
        }
        //renders data bars
        renderBars() {
            push()
              translate(this.chartPosX, this.chartPosY)
              push()

              for (let i = 0; i < this.data.length; i++) { 
                let xPos = i * (this.barWidth + this.gap);
                push();
                translate(xPos, 0);

                for(let j=0; j<this.yValues.length; j++){
                    fill(random(100,255));
                    noStroke();
                    rect(0, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
                    translate(0,-cleanedData[i][this.yValues[j]]*this.scaler)
                 }
                 pop()
                 
        }
        }

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