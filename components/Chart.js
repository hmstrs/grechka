import styles from "../styles/Chart.module.css";
import {
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  LineChart,
  XAxis,
  YAxis
} from 'recharts';

const Chart = ({ productPrices }) => {
  return (
    <div className={styles.Chart}>
      <ResponsiveContainer>
        <LineChart data={productPrices}>
          <XAxis
            dataKey="date"
            padding={{ left: 20, right: 20 }}
            tickMargin={10}
            interval="preserveStartEnd"
          />
          <YAxis
            domain={['dataMin - 20', 'dataMax + 20']}
            tickMargin={10}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line name="Ціна" dataKey="price" unit={" грн."} stroke="black" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
