import icon from "../styles/icon.module.css"
interface IconProps {
  width?: string
  height?: string
  borderRadius?: string
}
export const Icon: React.FC<IconProps> = ({
  width,
  height,
  borderRadius,
}) => {
  return (
    <div
      className={icon.icon}
      style={{
        height: `${height}`,
        width: `${width}`,
        borderRadius: `${borderRadius}`,
      }}
    ></div>
  )
}
