import styles from '../../styles/components/Aside/Description.module.css'

const Description = ({ name, lastName, descriptions }) => {
  return (
    <div className={styles.container}>
      <h2>{`${name} ${lastName}`}</h2>
      {descriptions.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </div>
  )
}

export default Description
