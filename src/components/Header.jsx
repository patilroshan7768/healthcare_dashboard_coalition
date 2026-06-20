import TechCareLogo from "../assets/images/TestLogo.svg";
import DoctorImg from "../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";
import SettingImg from "../assets/images/settings_FILL0_wght300_GRAD0_opsz24.png";

import {
  HomeIcon,
  PatientsIcon,
  ScheduleIcon,
  MessageIcon,
  TransactionsIcon,
  SettingsIcon,
  KebabIcon,
} from "./Icons";

const NAV_ITEMS = [
  { label: "Overview", Icon: HomeIcon },
  { label: "Patients", Icon: PatientsIcon },
  { label: "Schedule", Icon: ScheduleIcon },
  { label: "Message", Icon: MessageIcon },
  { label: "Transactions", Icon: TransactionsIcon },
];

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={TechCareLogo} alt="Tech.Care" />
      </div>

      <nav className="header-nav">
        {NAV_ITEMS.map(({ label, Icon }) => (
          <span
            key={label}
            className={label === "Patients" ? "nav-item active" : "nav-item"}
          >
            <Icon className="nav-icon" />
            {label}
          </span>
        ))}
      </nav>

      <div className="header-profile">
        <img src={DoctorImg} alt="DoctorImg" />

        <div className="doctor-info">
          <strong>Dr. Jose Simmons</strong>
          <span>General Practitioner</span>
        </div>

        <button className="icon-btn" type="button" aria-label="Settings">
          <img src={SettingImg} alt="SettingImg" />
        </button>

        <button className="icon-btn" type="button" aria-label="More options">
          <KebabIcon />
        </button>
      </div>
    </header>
  );
}

export default Header;
