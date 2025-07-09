import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import styles from './ResultPieChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const typeLabels = {
  planner: 'Планировщик',
  prioritizer: 'Приоритетчик',
  organizer: 'Организатор',
  visualizer: 'Визуализатор'
};

const chartColors = {
  planner: '#4a79da',
  prioritizer: '#f5a623',
  organizer: '#50c878',
  visualizer: '#b55efc'
};

export default function ResultPieChart({ counts, dominantType }) {
  const labels = Object.keys(counts).map(type => typeLabels[type]);
  const dataValues = Object.values(counts);
  const backgroundColors = Object.keys(counts).map(type =>
    type === dominantType ? chartColors[type] : `${chartColors[type]}55`
  );

  const data = {
    labels,
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors,
        borderColor: '#ffffff',
        borderWidth: 2
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <div className={styles.chartContainer}>
      <Pie data={data} options={options} />
    </div>
  );
}
