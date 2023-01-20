import styles from '../../styles/components/Home/Title.module.css'

const Title = ({ name, lastName, nickname }) => {
  return (
    <div className={styles.container}>
      <h1>Meet the Maker: The Face Behind the Work</h1>
      <div className={styles.introductionContainer}>
        <p>Hi, I&apos;m <span><strong>{name} {lastName}</strong> ({nickname})</span>, a web developer and computer science student.
          I specialize in building web applications and websites that solve problems and improve people&apos;s
          lives. I&apos;m constantly learning and exploring new technologies and work approaches to improve my
          skills and offer high-quality solutions to my clients.
        </p>
      </div>
    </div>
  )
}

export default Title
