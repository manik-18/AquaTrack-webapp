import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/context'; // Import Firebase context
import Chart from "../components/Chart";

const Analysis = () => {
  const { fetchPHData, fetchTemperatureData, fetchOxygenLevelsData, fetchHardnessData } = useContext(FirebaseContext);
  const [pHData, setPHData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [oxygenLevelsData, setOxygenLevelsData] = useState([]);
  const [hardnessData, setHardnessData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pH = await fetchPHData();
        setPHData(pH);
        
        const temperature = await fetchTemperatureData();
        setTemperatureData(temperature);
        
        const oxygenLevels = await fetchOxygenLevelsData();
        setOxygenLevelsData(oxygenLevels);
        
        const hardness = await fetchHardnessData();
        setHardnessData(hardness);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [fetchPHData, fetchTemperatureData, fetchOxygenLevelsData, fetchHardnessData]);

  return (
    <>
      <div className="p-8">
        <h1 className="text-center text-4xl font-semibold text-accent mb-8 mt-16">pH Chart</h1>
        <Chart data={pHData} parameter="pH" />
      </div>
      <div className="p-8">
        <h1 className="text-center text-4xl font-semibold text-accent my-8">Temperature Chart</h1>
        <Chart data={temperatureData} parameter="temperature" />
      </div>
      <div className="p-8">
        <h1 className="text-center text-4xl font-semibold text-accent my-8">Oxygen Chart</h1>
        <Chart data={oxygenLevelsData} parameter="DO" />
      </div>
      <div className="p-8">
        <h1 className="text-center text-4xl font-semibold text-accent my-8">Hardness Chart</h1>
        <Chart data={hardnessData} parameter="hardness" />
      </div>
    </>
  );
};

export default Analysis;
