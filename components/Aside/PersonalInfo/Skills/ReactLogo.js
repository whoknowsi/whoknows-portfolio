import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const ReactLogo = ({ colors, width, height }) => (
  <div className={styles.container}>
    <svg viewBox="-11.5 -10.232 23 20.463" width={width} height={height}>
      <title>{'React Logo'}</title>
      <circle r={2.05} fill={colors.darkGrayColor} />
      <g stroke={colors.darkGrayColor} fill="none">
        <ellipse rx={11} ry={4.2} />
        <ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </g>
    </svg>
  </div>
)

export default ReactLogo
