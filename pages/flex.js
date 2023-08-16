import React from 'react'
import styles from '../styles/flex.module.css'

function Flex() {
  return (
    <div className={styles.flex}>
      <div className={styles.item1}>1</div>
      <div className={styles.item2}>2</div>
      <div className={styles.item3}>3</div>
      <div className={styles.item4}>4</div>
      <div className={styles.item5}>5</div>
      <div className={styles.item6}>6</div>
    </div>
  )
}

export default Flex