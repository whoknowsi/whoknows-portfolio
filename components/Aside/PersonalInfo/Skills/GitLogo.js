import styles from '../../../../styles/components/Aside/PersonalInfo/SkillSvg.module.css'

const GitLogo = ({ colors, width, height }) => (
  <div className={styles.container}>
    <svg viewBox="0 0 114 114" width={width} height={height}>
      <path
        fill={colors.darkGrayColor}
        d="M111.78 51.977 62.035 2.238a7.335 7.335 0 0 0-10.374 0l-10.329 10.33L54.434 25.67c3.046-1.028 6.537-.339 8.964 2.089a8.72 8.72 0 0 1 2.07 9.019l12.628 12.628c3.055-1.053 6.58-.373 9.02 2.071a8.726 8.726 0 0 1 0 12.345 8.73 8.73 0 0 1-14.25-9.494L61.09 42.551v30.991a8.805 8.805 0 0 1 2.308 1.65c3.41 3.41 3.41 8.934 0 12.349-3.41 3.409-8.938 3.409-12.345 0-3.41-3.415-3.41-8.939 0-12.348a8.736 8.736 0 0 1 2.859-1.905V42.01a8.614 8.614 0 0 1-2.86-1.905 8.728 8.728 0 0 1-1.88-9.544L36.255 17.642 2.15 51.747a7.339 7.339 0 0 0 0 10.378l49.742 49.74a7.338 7.338 0 0 0 10.376 0L111.78 62.36a7.341 7.341 0 0 0 0-10.379"
      />
    </svg>
  </div>
)

export default GitLogo
