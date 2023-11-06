import { 
  BarChartBox, 
  BigChartBox, 
  ChartBox, 
  PieChartBox, 
  TopBox 
} from "../components"
import {
  ChartBoxUser, 
  ChartBoxProduct,
  ChartBoxConversion, 
  ChartBoxRevenue, 
  BarChartBoxRevenue,
  BarChartBoxVisit
} from "../data"

const Home = () => {
  return (
    <main className=" grid gap-3 grid-cols-4 auto-rows">

      <div className="box col-span-1 row-span-3"><TopBox /></div>
      <div className="box"><ChartBox {...ChartBoxUser}/></div>
      <div className="box"><ChartBox {...ChartBoxProduct}/></div>
      <div className="box col-span-1 row-span-3"><PieChartBox /></div>
      <div className="box"><ChartBox {...ChartBoxConversion}/></div>
      <div className="box"><ChartBox {...ChartBoxRevenue}/></div>
      <div className="box col-span-2 row-span-2"><BigChartBox /></div>
      <div className="box"><BarChartBox {...BarChartBoxVisit}/></div>
      <div className="box"><BarChartBox {...BarChartBoxRevenue}/></div>

    </main>
  )
}

export default Home