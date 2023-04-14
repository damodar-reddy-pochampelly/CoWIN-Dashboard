import {PieChart, Pie, Legend, ResponsiveContainer, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {ageWiseData} = props
  return (
    <div className="chart-bg">
      <h1 className="chart-title">Vaccination by age</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={ageWiseData}
            dataKey="count"
            startAngle={0}
            endAngle={360}
            innerRadius={0}
            outerRadius={100}
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend iconType="circle" wrapperStyle={{paddingBottom: '20px'}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByAge
