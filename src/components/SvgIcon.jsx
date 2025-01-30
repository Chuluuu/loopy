import Login from "@/components/icons/login-1.svg";
import Logo from "@/components/icons/logo.svg";
import LogoBlue from "@/components/icons/logoblue.svg";
const svgIcons = { login: Login, logo: Logo, logoblue: LogoBlue };
export function SvgIcon(props) {
  const { name, className, width, height, size, color } = props;
  const SvgIcon = svgIcons[name];

  return (
    <span className={`inline-flex ${className}`} style={{ color }}>
      <SvgIcon
        aria-hidden="true"
        width={size || width || 18}
        height={size || height || 18}
      />
    </span>
  );
}
