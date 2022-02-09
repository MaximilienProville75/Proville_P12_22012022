import React from "react";
import "./../DailyActivity/DailyActivity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const generateData = (props) => {
  const data = props.data.map((item, idx) => ({ ...item, day: idx + 1 }));
  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="toolTipActivityDaily">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="intro">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const DailyActivities = (props) => {
  const data = generateData(props);

  return (
    <BarChart
      width={900}
      height={320}
      data={data}
      margin={{ top: 30, bottom: 20 }}
    >
      <text
        x="10%"
        y="5%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="dailyActivityText"
      >
        Activité quotidienne
      </text>
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="right"
        wrapperStyle={{
          position: "relative",
          top: "-320px",
        }}
        iconType="circle"
      />
      <CartesianGrid strokeDasharray="5 5" vertical={false} />
      <XAxis dataKey="day" tickSize tick />
      <YAxis orientation="right" domain={["dataMin - 50", "dataMax + 20"]} />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
      />
    </BarChart>
  );
};

export default DailyActivities;
