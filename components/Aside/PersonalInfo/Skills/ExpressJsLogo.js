import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const ExpressJsLogo = ({ width, height, colors }) => (
  <div className={styles.container}>
    <svg viewBox="0 0 500 500" width={width} height={height}>
      <circle
        fill={colors.darkGrayColor}
        cx={250}
        cy={250}
        r={250}
      />
      <text
        style={{
          fill: colors.backgroundColor,
          fontFamily: 'Arial,sans-serif',
          fontSize: 350,
          textAnchor: 'middle',
          whiteSpace: 'pre'
        }}
        x={244.942}
        y={342.414}
      >
        {'ex'}
      </text>
    </svg>
  </div>
)

export default ExpressJsLogo
