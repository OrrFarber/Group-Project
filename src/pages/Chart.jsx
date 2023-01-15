import { ResponsiveBar } from "@nivo/bar";
import { data } from "./ChartData";

export default function Chart() {
  return (
    <div style={{ height: "400px" }}>
      <h1>Progress by dates:</h1>
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
        maxValue={10}
        groupMode="grouped"
        layout="horizontal"
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
          {
            id: "dots1",
            type: "patternDots",
            background: "inherit",
            color: "#fffdd0",
            size: 4,
            padding: 1,
            stagger: true,
          },
        ]}
        fill={[
          {
            match: {
              id: "chest",
            },
            id: "dots",
          },
          {
            match: {
              id: "biceps",
            },
            id: "lines",
          },
          {
            match: {
              id: "quadriceps",
            },
            id: "dots1",
          },
        ]}
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
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
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
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
    </div>
  );
}
