import { Link } from "react-router-dom";

type TeamMember = {
  name: string;
  position: string;
  image: string;
  socials: { icon: string; link: string }[];
};

const TeamMemberCard = ({
  teamMember,
  blurBackground,
}: {
  teamMember: TeamMember;
  blurBackground?: boolean;
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="team-boxarea">
        <div className="img1">
          <img src={teamMember.image} alt={teamMember.name} />
        </div>
        <ul
          style={{
            backgroundImage: blurBackground
              ? "url(../assets/img/bg/iconsbg.png)"
              : "",
            display: "flex",
            justifyContent: "center",
            padding: "10px 0",
          }}
        >
          {teamMember.socials.map((social, i) => (
            <li key={i} style={{ margin: "0 8px" }}>
              {/* Changed from Link to a regular anchor tag for better touch handling */}
              <Link
                to={social.link}
                className="social-icon-wrapper"
                style={{
                  position: "relative",
                  display: "block",
                  width: "32px",
                  height: "32px",
                }}
              >
                <img
                  src={social.icon}
                  alt={`${teamMember.name} social`}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "20px", // Set explicit width
                    height: "20px", // Set explicit height
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="content">
          <Link to="/team">{teamMember.name}</Link>
          <p>{teamMember.position}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
