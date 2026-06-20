import BirthIcon from "../assets/icons/BirthIcon.png";
import GenderIcon from "../assets/icons/FemaleIcon.png";
import PhoneIcon from "../assets/icons/PhoneIcon.png";
import InsuranceIcon from "../assets/icons/InsuranceIcon.png";

function ProfileCard({ jessica }) {
  const formattedDate = new Date(jessica.date_of_birth).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    },
  );
  return (
    <div className="profile-card">
      <img
        src={jessica.profile_picture}
        alt={jessica.name}
        className="profile-image"
      />

      <h2>{jessica.name}</h2>

      <div className="profile-info">
        <div className="info-item">
          <img src={BirthIcon} alt="Birth" className="info-icon" />
          <div>
            <span>Date Of Birth</span>
            <strong>{formattedDate}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src={GenderIcon} alt="Gender" className="info-icon" />
          <div>
            <span>Gender</span>
            <strong>{jessica.gender}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src={PhoneIcon} alt="Phone" className="info-icon" />
          <div>
            <span>Contact Info</span>
            <strong>{jessica.phone_number}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src={PhoneIcon} alt="Phone" className="info-icon" />
          <div>
            <span>Emergency Contacts</span>
            <strong>{jessica.emergency_contact}</strong>
          </div>
        </div>

        <div className="info-item">
          <img src={InsuranceIcon} alt="Insurance" className="info-icon" />
          <div>
            <span>Insurance Provider</span>
            <strong>{jessica.insurance_type}</strong>
          </div>
        </div>
      </div>

      <button className="profile-btn" type="button">
        Show All Information
      </button>
    </div>
  );
}

export default ProfileCard;
