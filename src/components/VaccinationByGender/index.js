import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {genderWiseData} = props
  return (
    <div className="chart-bg">
      <h1 className="chart-title">Vaccination by gender</h1>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={genderWiseData}
            dataKey="count"
            startAngle={180}
            endAngle={0}
            innerRadius="30%"
            outerRadius="60%"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill=" #5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" wrapperStyle={{paddingBottom: '20px'}} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
