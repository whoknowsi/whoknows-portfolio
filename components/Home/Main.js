import styles from '../../styles/components/Home/Main.module.css'
import LastProjects from './LastProjects'
import Title from './Title'

const Main = ({ projects, info }) => {
  return (
    <>
      <div className={styles.container}>
        <Title name={info.name} lastName={info.lastName} nickname={info.nickName} />
        <LastProjects projects={projects} />
      </div>
    </>
  )
}

export default Main
