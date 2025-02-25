class stackedChart {
    constructor(obj){
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        
        this.chartHeight = obj.chartHeight || 400;
        this.chartWidth = obj.chartWidth || 400;
        this.barWidth = obj.barWidth || 20;
        this.margin = obj.margin || 20;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX ||550;
        this.chartPosY = obj.chartPosY || 1000;

        this.axisColour = color(255);
        this.barColours = [color(255, 99, 71), color(76, 175, 80)];
        this.axisTextColour = color(255);

        this.yValues = obj.yValues;
        this.xValue = "Age";
        this.yTotal = "Total";
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight / (max(this.data.map(row => row[this.yValues[0]] + row[this.yValues[1]])));
        
        this.chartTitle = obj.chartTitle || "AAAAA";
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
 
        let starting_Salary = cleanedData.map(row => row.starting_Salary)
        let age = cleanedData.map(row => row.age)
 
        //console.log(femaleScores, ageGroups)
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
                    fill(this.barColours[j]);
                    noStroke();
                    rect(0, 0, this.barWidth, -this.data[i][this.yValues[j]] * this.scaler);
                    //translate(0,-cleanedData[i]this.yTotal)
                    translate(0,-this.data[i][this.yValues[j]]*this.scaler -1)
                    console.log(i,j,-this.data[i][this.yValues[j]]*this.scaler -1)
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
                //fill(this.barColour)
            
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
     
        //console.log(femaleScores, ageGroups)
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