import { useEffect, useState } from "react";
import Radar from "./Radar";

function Stats(props) {
  const [statsData, setStatsData] = useState({
    labels: ["Hp", "Attack", "Defense", "S. Attack", "S. Defense", "Speed"],
    datasets: [],
  });

  useEffect(() => {
    setStatsData({
      ...statsData,
      datasets: [
        {
          label: "Pokemon Stats",
          data: Array.from(props.stats).map((stat) => stat.base_stat),
          backgroundColor: "rgba(255, 255, 255, .7)",
          borderColor: "rgba(255, 255, 255, .7)",
          borderWidth: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="chart-container">
      <Radar chartData={statsData} />
    </div>
  );
}
export default Stats;

// style={{ width: 340 }}

//  const statsArr = props.map((stat) => stat.base_stat);

//   const asd = props.stats;
//   const [statsArr, setStatsArr] = useState([]);

//   useEffect(() => {
//     setStatsArr(asd.map((stat) => stat.base_stat));
//   }, []);

//   console.log(statsArr);
