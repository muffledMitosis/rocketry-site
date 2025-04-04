import FooterConnectIcon from "./footer-icon";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-8 bg-rock-blue-light text-white">
      <div className="flex flex-row space-x-4 mb-4">
        <FooterConnectIcon type="facebook" />
        <FooterConnectIcon type="instagram" />
        <FooterConnectIcon type="linkedin" />
        <FooterConnectIcon type="email" />
      </div>
      <div className="text-sm text-center">
        {new Date().getFullYear()} ANU Rocketry. All rights reserved.
      </div>
    </div>
  );
}
