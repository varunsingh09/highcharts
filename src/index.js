import React, { useState } from "react";
import { render } from "react-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

const App = () => {

  const fuelType = [
    { 'id': "0", 'value': "LNG" },
    { 'id': "1", 'value': "PNG" },
    { 'id': "2", 'value': "CNG" },
    { 'id': "3", 'value': "NITROGEN" }]

  let INITIAL_STATE_LNG = {
    title: {
      text: "LNG"
    },
    xAxis: {
      title: {
        text: "Gas"
      }
    },
    series: [
      {
        name: "LNG",
        color: "#ff0000",
        data: [10, 20, 40]
      }
    ]
  }

  let INITIAL_STATE_PNG = {
    title: {
      text: "PNG"
    },
    xAxis: {
      title: {
        text: "Gas"
      }
    },
    series: [
      {
        name: "PNG",
        color: "#00bfff",
        data: [20, 40, 60]
      }
    ]
  }

  let INITIAL_STATE_CNG = {
    title: {
      text: "CNG"
    },
    xAxis: {
      title: {
        text: "Gas"
      }
    },
    series: [
      {
        name: "CNG",
        color: "#A569BD",
        data: [60, 80, 100]
      }
    ]
  }

  let INITIAL_STATE_NITROGEN = {
    title: {
      text: "NITROGEN"
    },
    xAxis: {
      title: {
        text: "Gas"
      }
    },
    series: [
      {
        name: "NITROGEN",
        color: "#229954",
        data: [25, 50, 75]
      }
    ]
  }

  const [chartOptions, setChartOptions] = useState(INITIAL_STATE_LNG);

  const handelChange = (e) => {
    let { name, value } = e.target
    if (value === "0") {
      setChartOptions(INITIAL_STATE_LNG)
    } else if (value === "1") {
      setChartOptions(INITIAL_STATE_PNG)
    } else if (value === "2") {
      setChartOptions(INITIAL_STATE_CNG)
    } else if (value === "3") {
      setChartOptions(INITIAL_STATE_NITROGEN)
    }

  }



  return (
    <div>
      <select name={`fuel`} onChange={handelChange}>
        {fuelType && fuelType.map((fuel, index) => {
          return <option value={fuel.id} key={index}>{fuel.value}</option>
        })}

      </select>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

render(<App />, document.getElementById("root"));
