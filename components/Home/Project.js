import styles from '../../styles/components/Home/Project.module.css'

const Project = ({ name, description, createdAt, status, client }) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Project
