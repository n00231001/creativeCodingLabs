class pieChart {
    constructor(obj){
        this.data = obj.data;
        this.yValue = obj.yValue;
        this.xValue = obj.xValue;
        this.myNewArray = this.data.map(row => row[this.yValue]);

        
        this.chartHeight = obj.chartHeight || 300;
        this.chartWidth = obj.chartWidth || 300;
        this.barWidth = obj.barWidth || 10;
        this.margin = obj.margin || 10;
        this.axisThickness = obj.axisThickness || 2;
        this.chartPosX = obj.chartPosX || 50;
        this.chartPosY = obj.chartPosY || 350;
        this.piePosX = obj.piePosX || 250;
        this.piePosY = obj.piePosY || 250;

        this.axisColour = color(255);
        this.barColour = color(255);
        this.axisTextColour = color(255);
 
        this.gap = (this.chartWidth - (this.data.length * this.barWidth) - (this.margin*2))/(this.data.length-1);
        this.scaler = this.chartHeight/(max(cleanedData.map(row => row[this.yValue])));
 
    }

    renderAxisBars(){
        push();
        translate(this.chartPosX,this.chartPosY);
        noFill();
        stroke(this.axisColour);
        strokeWeight(this.axisThickness);
        line (0, 0, 0, -this.chartHeight);      //vertical
        line (0, 0, this.chartWidth, 0);       //horizontal
        pop();
 
        //let femaleScores = cleanedData.map(row => row.Female)
        //let ageGroups = cleanedData.map(row => row.ageGroup)
 
        //console.log(femaleScores, ageGroups)
        }
    renderBars(){
        push();
            translate(this.piePosX, this.piePosY);

            let total = this.myNewArray.reduce((sum, val) => sum + val, 0);
            
            for(let i=0; i<this.myNewArray.length; i++){
                fill(random(255),0,0);
                stroke(255);
                let start = 0;
                let end = ((this.myNewArray[i]/total)*360);

                arc(0,0,200,200,start,end,PIE);

                rotate (end);
    }
}}