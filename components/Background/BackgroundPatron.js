import styles from '../../styles/components/Background/BackgroundPatron.module.css'
import Montains from './Montains'

const BackgroundPatron = ({ open }) => {
  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`}>
      <Montains />
    </div>
  )
}

export default BackgroundPatron
