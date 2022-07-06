import {useState,useEffect,useMemo}from "react";
import Cards from "../Cards/Cards"
import { ResponsiveContainer, LineChart,
  Line,
  XAxis,
  Tooltip
  } from 'recharts';

import axios from 'axios'
import "./Graph.css";


export default function Graph() {
  const [predictionStats, setpredictionStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      'January',
      'Febuary',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    []
  );
  const getpredictionStats = async () => {
      const totalprediction = await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/allpredictions");
      console.log(totalprediction.data)
      totalprediction.data.map((prediction) =>
        setpredictionStats((prev) => [
          ...prev,
          { name: MONTHS[prediction._id - 1], 'Prediction': prediction.total },
        ])
      );
  };
  useEffect(getpredictionStats, [MONTHS]);
  return (
    <> 
   
   <Cards/>
    <div className='graph'>
        <h3 style={{color:'black'}}>Prediction Analytics</h3>
        <ResponsiveContainer width='100%' aspect={4}>
          <LineChart data={predictionStats}>
            <XAxis dataKey='name' stroke='black' />
            <Line type='monotone' dataKey="Prediction" stroke='grey' />
            <Tooltip />
          
          </LineChart>
        </ResponsiveContainer>
      </div>
  </>
  );
}
