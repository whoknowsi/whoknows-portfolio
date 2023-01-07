import styles from '../../styles/components/Home/Project.module.css'

const Project = ({ name, description, createdAt, status, client }) => {
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  )
}

export default Project
