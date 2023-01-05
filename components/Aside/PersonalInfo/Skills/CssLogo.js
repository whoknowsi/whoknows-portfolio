import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const CssLogo = ({ width, height, colors }) => (
  <div className={styles.container}>
    <svg viewBox="0 0 452 520" width={width} height={height}>
      <title>{'CSS3 Logo Badge'}</title>
      <path
        fill={colors.darkGrayColor}
        d="M41 460 0 0h451l-41 460-185 52" />
      <path
        fill={colors.grayColor}
        d="m226 472 149-41 35-394H226" />
      <path
        fill={colors.backgroundColor}
        d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261-124-33 7 60 117 32z"
      />
      <path
        fill={colors.lightBackgroundColor}
        d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"
      />
    </svg>
  </div>
)

export default CssLogo
