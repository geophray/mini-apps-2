import React from 'react';

import styles from '../css/event.css';

const Event = ({ item }) => {
  return(
    <div className={styles['single-event']}>
      <p>{item.description}</p>
      <div>
        {item.category1 ? <span><span className={styles.label}>Category 1</span>{item.category1}</span> : null}
        {item.category2 ? <span><span className={styles.label}>Category 2</span>{item.category2}</span> : null}
        <span><span className={styles.label}>Date</span>{item.date}</span>
        <span className={styles.edit}>Edit</span>
      </div>
    </div>
  );
};

export default Event;
