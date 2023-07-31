import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import type { ChartData } from "~/pages/index";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Graph = ({ data }: { data: ChartData }) => {
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Graph;
