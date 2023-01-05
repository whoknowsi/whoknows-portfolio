import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const HtmlLogo = ({ width, height, colors }) => {
  return (
    <div className={styles.container}>
      <svg viewBox="0 0 452 520" width={width} height={height}>
        <title>{'HTML5 Logo Badge'}</title>
        <path
          fill={colors.darkGrayColor}
          d="M41 460 0 0h451l-41 460-185 52" />
        <path
          fill={colors.grayColor}
          d="m226 472 149-41 35-394H226" />
        <path
          fill={colors.backgroundColor}
          d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147-64-17-4-45h-56l7 89 117 32z"
        />
        <path
          fill={colors.lightBackgroundColor}
          d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
      </svg>
    </div>
  )
}

export default HtmlLogo
