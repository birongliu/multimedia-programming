const getData = async () => {
  const response = await fetch(
    "https://data.cityofnewyork.us/resource/5hjv-bjbv.json?$limit=10"
  );
  const data = await response.json();
  const industries = data.map((e) => e.industry);
  const employments = data.map((e) => e.employment);
  return { employments, industries, context: data };
};

const mergeData = async (employments, industries) => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = {
      data: [employments[i]],
      label: industries[i],
      backgroundColor: randomColor(),
    };
  }
  return arr;
};
/**
 * [
        {
          label: "Employment (millions)",
          backgroundColor: ["#3e95cd"],
          data: employments,
        },
      ],
 */

const randomColor = () => {
  const r = Math.floor(Math.random() * 200); // Pick a random number between 0 and 255
  const g = Math.floor(Math.random() * 200); // Pick a random number between 0 and 255
  const b = Math.floor(Math.random() * 200); // Pick a random number between 0 and 255
  const a = Math.random().toFixed(1); // Pick a random number between 0 and 1 with 1 decimal place
  return `rgba(${r},${g},${b},${a})`;
};

const createChart = async () => {
  let { employments, industries, context } = await getData();
  let data = await mergeData(employments, industries);
  new Chart(document.getElementById("bar-chart"), {
    type: "bar",
    data: {
      labels: data.map(d => d.label),
      datasets: [{
        data: employments,
        backgroundColor: data.map(() => randomColor())
      }],
    },
    options: {
       legend: { display: false },
       title: {
        display: true,
        text: "New York City Seasonally Adjusted Employments",
      },
    },
  });
};

createChart();
