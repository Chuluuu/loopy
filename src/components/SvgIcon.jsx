import Login from "@/components/icons/login-1.svg";

const svgIcons = { login: Login };
export function SvgIcon(props) {
  const { name, className, width, height, size } = props;
  const SvgIcon = svgIcons[name];

  return (
    <span className={`inline-flex ${className}`}>
      <SvgIcon
        aria-hidden="true"
        width={size || width || 18}
        height={size || height || 18}
      />
    </span>
  );
}
