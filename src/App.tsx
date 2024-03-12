import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './pages/home'
import TableOne from './pages/tableOne'
import ChartOne from './pages/chartOne'
import TableTwo from './pages/tableTwo'
import ChartTwo from './pages/chartTwo'

import './App.css';
import ResponsiveDrawer from './components/drawer'
import getData, {Result, Endpoint} from './utils/getData';

export interface PageProps {
  data: Result | undefined
}


const App = () => {

  const [data, setData] = useState<Result>()
  const [datasetName, setDatasetName] = useState<Endpoint>()
  const [errorMessage, setErrorMessage] = useState<string>()

  useEffect(() => {
    (async () => {
      if (datasetName) {
        const response = await getData(datasetName)
        if (response.success) {
          setData(response.result)
        } else {
          setErrorMessage(response.result)
        }
      }
    })()
  }, [datasetName])

  return (
    <ResponsiveDrawer
      setDatasetName={setDatasetName}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="balanceTable" element={<TableOne data={data}/>} />
        <Route path="balanceChart" element={<ChartOne data={data}/>} />
        <Route path="interestRateTable" element={<TableTwo data={data}/>} />
        <Route path="interestRateChart" element={<ChartTwo data={data}/>} />
      </Routes>
    </ResponsiveDrawer>   
  )
}


export default App;
