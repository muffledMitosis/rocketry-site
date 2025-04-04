import { JSX } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

type SocialType = "facebook" | "instagram" | "email" | "linkedin";

const iconMap: Record<SocialType, { icon: JSX.Element; url: string }> = {
  facebook: {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/ANURocketry",
  },
  instagram: {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/anu_rocketry",
  },
  linkedin: {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/company/anu-rocketry",
  },
  email: { icon: <FaEnvelope />, url: "mailto:rocketry@anu.edu.au" },
};

const FooterConnectIcon = ({ type }: { type: SocialType }) => {
  const { icon, url } = iconMap[type];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl"
    >
      {icon}
    </a>
  );
};

export default FooterConnectIcon;
