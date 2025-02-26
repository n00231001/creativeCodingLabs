let data;
let cleanedData = [];
let charts = [];

function preload() {
  data = loadTable("./data/education.csv", "csv", "header");
}

function setup() {
  createCanvas(2000, 1600);
  angleMode(DEGREES);
  noLoop();
  cleanData();

  console.log(data);

  charts.push(
    new barChart({
      data: cleanedData.slice(10),
      xValue: "Field_of_Study",
      yValue: "Starting_Salary",
      // chartHeight: 400,
      // chartWidth: 500,
      // barWidth: 2,
      // aixsThickness: 10,
      // margin: 15,
      // chartPosX: 50,
      // chartPosY: 450,
    })
  );

  charts.push(
    new barChart({
      data: cleanedData.slice(10),
      xValue: "Field_of_Study",
      yValue: "Age",
      chartTile: "barChart 2",
      // chartHeight: 400,
      // chartWidth: 500,
      // barWidth: 2,
      // aixsThickness: 10,
      // margin: 15,
      chartPosX: 550,
      // chartPosY: 450,
    })
  );

  // charts.push(
  //   new lineChart({
  //     data: cleanedData.slice(0,25),
  //     xValue: "Age",
  //     yValues: "Starting_Salary",
  //     // chartHeight: 400,
  //     // chartWidth: 500,
  //     // barWidth: 25,
  //     // aixsThickness: 10,
  //     // margin: 15,
  //     // chartPosX: 600,
  //     // chartPosY: 450,
  //   })
  // );

  charts.push(
    new HorizontalChart({
      data: cleanedData.slice(10),
      xValue: "Field_of_Study",
      yValue: "Starting_Salary",
      // chartHeight:400,
      // chartWidth:500,
      // barWidth:25,
      // aixsThickness:10,
      // margin:15,
      // chartPosX:-650,
      // chartPosY:0
    })
  );

  charts.push(
    new pyramidChart({
      data: cleanedData.splice(10),
      xValue: "Field_of_Study",
      yValues: ["Starting_Salary", "highest_salary"]
      // chartHeight:400,
      // chartWidth:500,
      // barWidth:25,
      // aixsThickness:10,
      // margin:15,
      // chartPosX:600,
      // chartPosY:950,
      // barsPosX:800,
      // barsPosY:550,
    })
  );

  charts.push(
    new stackedChart({
      data: cleanedData,
      xValue: "Field_of_Study",
      yValues: ["Starting_Salary","highest_salary"],
      // chartHeight:400,
      // chartWidth:500,
      // barWidth:25,
      // aixsThickness:10,
      // margin:15,
      // chartPosX:1200,
      // chartPosY:450
    })
  );

  // charts.push(new pieChart({
  //     data:cleanedData,
  //     xValue:"Field_of_Study",
  //     yValue:"starting_Salary",
  //     chartHeight:400,
  //     chartWidth:500,
  //     barWidth:25,
  //     aixsThickness:10,
  //     margin:15,
  //     chartPosX:50,
  //     chartPosY:950,
  //     piePosY:750
  // }
  // ));

}

function draw() {
  background(69, 153, 255);
  charts.forEach((chart) => {
    chart.renderAxisBars();
    chart.renderBars();
    chart.renderTicks();
    chart.renderLabels();
    chart.renderTitles();
  });
}

function cleanData() {
  console.log(data);

  const headings = data.columns;
  //the following code is used to find the highest salary for each field of study
  //this is done by filtering the data by the field of study and then finding the max value
  //the mathematics array is used to store all the students that are studying mathematics
  cleanedData = data.rows.map((row) => {
    // values are stored in row.arr
    const keys = row.arr;

    // create a new empty object first
    const cleanObj = {};

    /*

    now we'll loop over the headings
    (Age, Gender, Field_of_Study, Starting_Salary)
    and we'll add to that object a key/value pair
    where the key is the heading and the value is the value at the same index in the keys array
    so we end up with something like

    {
      Age: 24,
      Gender: "Male",
      Field_of_Study: "Arts",
      Starting_Salary: 30000
    }

    */

    for (let i = 0; i < headings.length; i++) {
      // little trick
      // saves us needing an if statement
      // https://www.w3schools.com/jsref/jsref_number.asp
      // Number() function will try to convert a string to a number
      // if it can't, it will return NaN
      // NaN is a falsey value
      // so if it can't convert the string to a number it will just return the string itself,
      // hence the OR operator
      cleanObj[headings[i]] = Number(keys[i]) || keys[i];
    }

    return cleanObj;
  });

  const mathematics = cleanedData.filter(
    (row) => row.Field_of_Study == "Mathematics"
  );
  const arts = cleanedData.filter((row) => row.Field_of_Study == "Arts");
  const law = cleanedData.filter((row) => row.Field_of_Study == "Law");
  const medicine = cleanedData.filter(
    (row) => row.Field_of_Study == "Medicine"
  );
  const engineering = cleanedData.filter(
    (row) => row.Field_of_Study == "Engineering"
  );
  const compSci = cleanedData.filter(
    (row) => row.Field_of_Study == "Computer Science"
  );
  const business = cleanedData.filter(
    (row) => row.Field_of_Study == "Business"
  );
  
//calculates the highest salary for each field of study
//filters the previous data by the field of study and then finds the max value
  cleanedData.forEach((row) => {
    if (row.Field_of_Study == "Mathematics") {
      row.highest_salary = max(
        mathematics.map((Student) => Student.Starting_Salary)
      );
    }

    if (row.Field_of_Study == "Engineering") {
      row.highest_salary = max(
        engineering.map((Student) => Student.Starting_Salary)
      );
    }

    if (row.Field_of_Study == "Arts") {
      row.highest_salary = max(arts.map((Student) => Student.Starting_Salary));
    }

    if (row.Field_of_Study == "Law") {
      row.highest_salary = max(law.map((Student) => Student.Starting_Salary));
    }

    if (row.Field_of_Study == "Business") {
      row.highest_salary = max(
        business.map((Student) => Student.Starting_Salary)
      );
    }

    if (row.Field_of_Study == "Medicine") {
      row.highest_salary = max(
        medicine.map((Student) => Student.Starting_Salary)
      );
    }

    if (row.Field_of_Study == "Law") {
      row.highest_salary = max(law.map((Student) => Student.Starting_Salary));
    }

    if (row.Field_of_Study == "Computer Science") {
      row.highest_salary = max(
        compSci.map((Student) => Student.Starting_Salary)
      );
    }
  });

  // cleanedData = cleanedData.filter((obj1, i, arr) => 
  //   arr.findIndex(obj2 => (obj2.Field_of_Study === obj1.Field_of_Study)) === i
  // )

  // cleanedData.forEach((row) => {

  // })
}
