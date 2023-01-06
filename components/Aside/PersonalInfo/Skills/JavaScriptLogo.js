import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const JavaScriptLogo = ({ colors, width, height }) => (
  <div className={styles.container}>
    <svg viewBox="0 0 124 141.532" width={width} height={height}>
      <path
        fill={colors.darkGrayColor}
        d="M10.383 126.894 0 0l124 .255-10.979 126.639-50.553 14.638z"
      />
      <path
        fill={colors.grayColor}
        d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
      />
      <path
        fill={colors.backgroundColor}
        d="M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zm10.127 0H104.5L102 40z"
      />
      <path
        fill={colors.lightBackgroundColor}
        d="M57 26.5zm10.127 0H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
      />
    </svg>
  </div>
)

export default JavaScriptLogo