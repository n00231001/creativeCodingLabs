//object constructor is used to initalise objects
//an object is used to contain configuration data
class barChart {
    constructor(obj){
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        
        this.chartHeight = obj.chartHeight || 400;
        this.chartWidth = obj.chartWidth || 400;
        this.barWidth = obj.barWidth || 20;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 50;
        this.chartPosY = obj.chartPosY || 450;

        this.axisColour = color(255);
        this.barColour = color(253, 228, 48);
        this.axisTextColour = color(255);
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(cleanedData.map(row => row[this.yValue])));

        this.chartTitle = obj.chartTitle || "BarChart";

        this.yAxisLabel = obj.yAxisLabel || "AAAA";
        this.xAxisLabel = obj.xAxisLabel || "AAAA";
 
    }
    //renders bars
    renderChartBars(){
        push();
        //translate is used to move the starting position when drawing objects 
        //chartPosX and Y are taken from the constructor and used to place the bars
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartHeight);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
        pop();
 
        console.log(starting_Salary, Field_of_Study)
        }
 
    renderBars() {
        push()
          translate(this.chartPosX, this.chartPosY)
          //i is initally set as 0 and keeps looping increasing from 0 each time till it reaches the full length of the data
          for(let i = 0; i<this.data.length; i++) {
            let xPos = i*(this.barWidth + this.gap)
            strokeWeight(this.axisThickness);
            //draws each bar on the yValue which is increasing through i
            rect (xPos,0,this.barWidth, -this.data[i][this.yValue]*this.scaler);
            line (0,0, this.chartWidth, 0);
            }
       
        pop()
            
    }

    renderAxisBars(){
   
        push();
     
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(255);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartHeight);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
       
        noStroke()
        text(this.xAxisLabel, this,this.chartWidth/2, 100);

        push();
        text(this.yAxisLabel, -this.chartHeight / 3, -170);
        pop();

       pop();
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
    let Starting_Salary = cleanedData.map(row => row.Starting_Salary)
    let Field_of_Study = cleanedData.map(row => row.Field_of_Study)
 
    console.log(Field_of_Study, Starting_Salary)
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
            text(0, -tickIncrements*i, -10, tickIncrements*i)
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