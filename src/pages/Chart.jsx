import { ResponsiveBar } from "@nivo/bar";
import { useState } from "react";
import { data } from "./ChartData";

export default function Chart() {
  let WorkoutArrey = [
    {
      date: "2023-01-01",
      workouts: [
        {
          muscle: "biceps",
        },
        {
          muscle: "lats",
        },
        {
          muscle: "hamstrings",
        },
      ],
    },
    {
      date: "2023-01-03",
      workouts: [
        {
          muscle: "biceps",
        },
        {
          muscle: "lats",
        },
      ],
    },
    {
      date: "2023-01-04",
      workouts: [
        {
          muscle: "biceps",
        },
        {
          muscle: "hamstrings",
        },
      ],
    },
    {
      date: "2023-04-05",
      workouts: [
        {
          muscle: "biceps",
        },
        {
          muscle: "hamstrings",
        },
        {
          muscle: "hamstrings",
        },
        {
          muscle: "hamstrings",
        },
        {
          muscle: "hamstrings",
        },
        {
          muscle: "hamstrings",
        },
        {
          muscle: "forearms",
        },
      ],
    },
  ];

  function getMonthToChart() {
    // const temp=WorkoutArrey.filter(work=>{
    //     constyear =work.date.split('-')
    // })
    // const tempDate=WorkoutArrey.map(work=>work.date.split('-'))

    let years = ["2020", "2021", "2022", "2023", "2024"];
    years.forEach((year) => {
      console.log(year);
      months.forEach((month) => {
        console.log(month);
        // const tempArr = WorkoutArrey.filter((item) => {
        //     const date = item.date.split("-");

        //     return date[1] == month && date[0] == year;
        // })
        //     .filter((item) =>
        //         item.workouts.find((workout) => workout.muscle == "hamstrings")
        //     );
        //     const MuscleType = tempArr.map((item) =>
        //         item.workouts.filter((item) => item.muscle == "hamstrings")
        //     );

        //     let sum = 0;
        //     for (let i = 0; i < MuscleType.length; i++) {
        //         sum = sum + MuscleType[i].length;
        //     }
        //     console.log(sum);
        // });
      });
    });

    //    const dateByMonth = WorkoutArrey.map()date.split("-");
    //    console.log(dateByMonth[0]+" "+dateByMonth[1])
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let muscles = [
    "abdominals",
    "abductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];
  let list = [];
  const [monthGraph, setMonthGraph] = useState([]);
  //   const [ter,setTer]=useState()
  function GetMuch(arr, year) {
    months.forEach((month) => {
      let graph = {};
      muscles.forEach((muc) => {
        const filteredByDate = filterByDate(arr, year, month);
        const numOfTimes = filterByType(filteredByDate, muc);
        graph.date = `${year}-${month}`;
        graph[muc] = numOfTimes;
        console.log(list);
      });
      list.push(graph);
    });
  }

  function filterByDate(arr, year, month) {
    const tempArr = arr.filter((item) => {
      const date = item.date.split("-");
      return date[1] == month && date[0] == year;
    });
    console.log(tempArr);
    return tempArr;
  }
  function filterByType(arr, muscleType) {
    const MuscleType = arr.map((item) =>
      item.workouts.filter((item) => item.muscle == muscleType)
    );
    let sum = 0;
    for (let i = 0; i < MuscleType.length; i++) {
      sum = sum + MuscleType[i].length;
    }
    console.log(sum);
    return sum;
  }
  let height = data.length * 5;
  let symbolSize = data.length * 6;

  // function ExdercisesByMuscle (){
  //     for (keys === WorkoutArrey.workouts) {
  //         return WorkoutArrey.workouts.muscle("").length
  //     }
  // }

  return (
    <div style={{ height: `${height}vw`, width: "100vw" }}>
      {/* <p>{getMonthToChart}</p> */}
      <button onClick={() => GetMuch(WorkoutArrey, "2023")}>clcickkck</button>
      {console.log(monthGraph)}
      <h1>Monthly workouts by muscle:</h1>
      <ResponsiveBar
        data={data}
        keys={[
          "abdominals",
          "abductors",
          "biceps",
          "calves",
          "chest",
          "forearms",
          "glutes",
          "hamstrings",
          "lats",
          "lower_back",
          "middle_back",
          "neck",
          "quadriceps",
          "traps",
          "triceps",
        ]}
        indexBy="date"
        margin={{ top: 50, right: 130, bottom: 50, left: 100 }}
        padding={0.3}
        groupMode="stacked"
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Date of exercise",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -30,
        }}
        labelSkipWidth={"12rem"}
        labelSkipHeight={"12rem"}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
        legends={[
            {
              dataFrom: "keys",
              anchor: "top",
              direction: "row",
              justify: true,
              translateX: -26,
              translateY: -38,
              itemsSpacing: 0,
              itemWidth: 63,
              itemHeight: 35,
              itemDirection: "top-to-bottom",
              itemOpacity: 0.85,
              symbolSize: `${symbolSize}`,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
      />
    </div>
  );
}
