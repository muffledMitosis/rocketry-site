import SocialIcon from "./footer-icon";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-rock-blue-light text-white">
      <div className="flex flex-row space-x-4 mb-4">
        <SocialIcon type="facebook" />
        <SocialIcon type="instagram" />
        <SocialIcon type="linkedin" />
        <SocialIcon type="email" />
      </div>
      <div className="text-sm text-center">
        {new Date().getFullYear()} ANU Rocketry. All rights reserved.
      </div>
    </div>
  );
}
