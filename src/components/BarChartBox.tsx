

import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string
  color: string
  dataKey: string
  chartData: object[]
}


const BarChartBox = (props: Props) => {
  return (
    <section className='w-full h-full'>
        <h1 className='text-xl font-bold '>{props.title}</h1>
        <div className="h-full">
          <ResponsiveContainer width="99%" height={150}>
            <BarChart
             width={150} 
             height={40} 
             data={props.chartData}
            >
              <Tooltip 
                contentStyle={{background: "#2a3447", borderRadius: "5px"}}
                labelStyle={{display: "none"}}
                cursor={{fill: "none"}}
              />
             <Bar 
               dataKey={props.dataKey} 
               fill={props.color}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </section>
  )
}

export default BarChartBox