import { Link } from "react-router-dom"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';


type Props = {
  color: string,
  icon: string,
  title: string,
  dataKey: string,
  number: number | string,
  percentage: number,
  chartData: object[]
}

const ChartBox = (props: Props) => {
  return (
    <section className=" flex items-center justify-between h-full">
       <div className="flex flex-col justify-between h-full flex-3">
        <div className="flex items-center gap-2 text-sm">
            <img src={props.icon} alt="user" />
            <span>{props.title}</span>
        </div>
        <h1 className="text-sm">{props.number}</h1>
        <Link to="/" className="text-xs" style={{color:props.color}}>View All</Link>
       </div>
       {/*  */}
       <div className="chartInfo flex flex-col justify-between flex-2 h-full">
            <div className="chart h-full w-full">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart data={props.chartData}>
                    <Tooltip 
                    contentStyle={{background: "transparent", border: "none"}}
                    labelStyle={{display: "none"}}
                    position={{x: 10, y: 55}}
                    />
                    <Line 
                      type="monotone"
                      dataKey={props.dataKey}
                      stroke={props.color}
                      strokeWidth={2}
                      dot={false}/>
                </LineChart>
            </ResponsiveContainer>
            </div>
            {/*  */}
            <div className="texts flex flex-col items-end text-sm">
                <span
                  className="font-bold text-lg" 
                  style={{
                    color: props.percentage < 0 
                    ? "tomato" 
                    : "limegreen"}}>
                      {props.percentage}%
                </span>
                <span>this month</span>
            </div>
       </div>

    </section>
  )
}

export default ChartBox