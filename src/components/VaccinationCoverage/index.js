import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {lastWeekData} = props
  const dataFormatter = number => {
    if (number > 0) {
      return `${(number * 10).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="chart-bg">
      <h1 className="chart-title">Vaccination Coverage</h1>
      <ResponsiveContainer width="98%" height={400}>
        <BarChart data={lastWeekData} margin={{top: 10}}>
          <XAxis
            dataKey="vaccineDate"
            tick={{stroke: '#6c757d', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={dataFormatter}
            tick={{stroke: '#6c757d', strokeWidth: 0.5}}
          />
          <Legend wrapperStyle={{paddingTop: '20px', paddingBottom: '20px'}} />
          <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" />
          <Bar dataKey="dose2" name="Dose 2" fill="#f54394" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage
