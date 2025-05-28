import { ActivityScore } from "../types";

type Props = {
  data: ActivityScore[];
};

function mapScoreToLabel(score: number): "Good" | "Average" | "Bad" {
  if (score >= 0.75) return "Good";
  if (score >= 0.4) return "Average";
  return "Bad";
}

const ActivityList = ({ data }: Props) => {
  return (
    <ul className="results">
      {data.map((item) => {
        const label = mapScoreToLabel(item.score);
        return (
          <li key={item.activity}>
            <strong>{item.activity}</strong>: {label} ({item.score})
          </li>
        );
      })}
    </ul>
  );
};

export default ActivityList;
