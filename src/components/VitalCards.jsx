import RespiratoryIcon from "../assets/images/respiratory rate.svg";
import TemperatureIcon from "../assets/images/temperature.svg";
import HeartRateIcon from "../assets/images/HeartBPM (1).svg";
import { ArrowUpIcon, ArrowDownIcon } from "./Icons";

function TrendArrow({ levels }) {
  if (!levels) return null;
  const lower = levels.toLowerCase();
  if (lower.includes("higher")) return <ArrowUpIcon className="trend-icon" />;
  if (lower.includes("lower")) return <ArrowDownIcon className="trend-icon" />;
  return null;
}

function VitalCards({ latest }) {
  return (
    <div className="vital-cards">
      <div className="vital-card respiratory">
        <img src={RespiratoryIcon} alt="" className="vital-icon" />

        <div className="vital-body">
          <h4>Respiratory Rate</h4>
          <p className="vital-value">{latest.respiratory_rate.value} bpm</p>
          <span className="vital-status">
            <TrendArrow levels={latest.respiratory_rate.levels} />
            {latest.respiratory_rate.levels}
          </span>
        </div>
      </div>

      <div className="vital-card temperature">
        <img src={TemperatureIcon} alt="" className="vital-icon" />

        <div className="vital-body">
          <h4>Temperature</h4>
          <p className="vital-value">{latest.temperature.value}&deg;F</p>
          <span className="vital-status">
            <TrendArrow levels={latest.temperature.levels} />
            {latest.temperature.levels}
          </span>
        </div>
      </div>

      <div className="vital-card heart">
        <img src={HeartRateIcon} alt="" className="vital-icon" />

        <div className="vital-body">
          <h4>Heart Rate</h4>
          <p className="vital-value">{latest.heart_rate.value} bpm</p>
          <span className="vital-status">
            <TrendArrow levels={latest.heart_rate.levels} />
            {latest.heart_rate.levels}
          </span>
        </div>
      </div>
    </div>
  );
}

export default VitalCards;
