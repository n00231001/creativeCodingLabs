class pyramidChart {
  constructor(obj) {
    this.data = obj.data;
    this.yValue = obj.yValue;
    this.xValue = obj.xValue;

    this.chartHeight = obj.chartHeight || 300;
    this.chartWidth = obj.chartWidth || 300;
    this.barWidth = obj.barWidth || 20;
    this.margin = obj.margin || 10;
    this.axisThickness = obj.axisThickness || 2;
    this.chartPosX = obj.chartPosX || 500;
    this.chartPosY = obj.chartPosY || 1400;

    this.barsPosX = obj.barsPosX || 0;
    this.barsPosY = obj.barsPosY || 0;

    this.axisColour = color(255);
    this.barColour = color(255);
    this.axisTextColour = color(255);

    this.yValues = obj.yValues;
    this.xValue = "Starting_Salary";
    this.yTotal = "Total";

    this.chartTitle = obj.chartTitle || "pyramid chart";

    this.gap =
      (this.chartWidth - this.data.length * this.barWidth - this.margin * 2) /
      (this.data.length - 1);
    this.scaler = this.chartHeight / max(this.data.map((row) => row[this.yValues[0]] + row[this.yValues[1]]));

    // Sort the data array based on the xValue to ensure numerical order on the x-axis
    this.data.sort((a, b) => a[this.xValue] - b[this.xValue]);
  }

  renderAxisBars() {
    push();
    translate(this.chartPosX, this.chartPosY);

    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);
    line(0, 0, 0, -this.chartWidth); //vertical
    line(0, 0, this.chartWidth, 0);
    line(0, 0, -this.chartWidth, 0); //horizontal
    pop();
  }

  renderBars() {
    push();
    translate(this.chartPosX, this.chartPosY);

    for (let i = 0; i < this.data.length; i++) {
      let yPos = i * (this.barWidth + this.gap);
      let LawSudents = this.data[i][this.yValues[0]];
      fill(255, 54, 54);
      rect(0, -yPos, LawSudents * this.scaler, this.barWidth);

      let ArtSudents = this.data[i][this.yValues[1]];
      fill(161, 48, 253);
      rect(0, -yPos, -ArtSudents * this.scaler, this.barWidth);
    }

    pop();
  }

  renderLabels() {
    push();
    translate(this.chartPosX, this.chartPosY);
    for (let i = 0; i < this.data.length; i++) {
      let xPos = i * (this.barWidth + this.gap);
      fill(this.barColour);
      rect(xPos, 0, this.barWidth, -this.data[i][this.yValue] * this.scaler);

      push();
      textSize(15);
      fill(255);
      stroke(0);
      strokeWeight(1);
      textAlign(LEFT, CENTER);
      push();
      translate(xPos + this.barWidth / 2, 10);
      rotate(70);
      text(this.data[i][this.xValue], 0, 0);
      pop();
      pop();
    }
    pop();
  }

  renderTicks() {
    push();
    translate(this.chartPosX, this.chartPosY);
    noFill();
    stroke(this.axisColour);
    strokeWeight(this.axisThickness);
    let tickIncrements = this.chartHeight / 5;
    for (let i = 0; i <= 5; i++) {
      line(0, -tickIncrements * i, -10, -tickIncrements * i);
    }
    pop();
  }

  renderTitles() {
    push();
    translate(this.chartPosX, this.chartPosY - this.chartHeight - 30);
    fill(this.axisTextColour);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(this.chartTitle, 250, 0);
    pop();
  }
}
