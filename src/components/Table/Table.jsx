import {useState,useEffect,useMemo}from "react";
import Chart from "../chart/Chart";
import Featureboxes from "../featuresBoxes/Featureboxes"
import axios from 'axios'
import "./Table.css";


export default function BasicTable() {
  const [Stats, setStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/stats");
        console.log(res.data)
        res.data.map((item) =>
          setStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], 'Prediction': item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <> 
    <div className='home'>
      <Featureboxes />
      <Chart
        data={Stats}
        title='Prediction Analytics'
        grid
        dataKey='Prediction'
      />
    </div>
  </>
  );
}
