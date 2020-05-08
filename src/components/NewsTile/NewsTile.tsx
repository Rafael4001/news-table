import React, { FC } from 'react';
import moment from 'moment';
import { INewsTile } from './NewsTile.types'

import styles from './NewsTile.module.scss';


const DATA_FORMAT = "DD/MM/YYYY HH:MM";


const NewsTile: FC<INewsTile> = ({
                                   title,
                                   data,
                                   description,
                                   image,
                                   url
                                 }) => {
  const dateString = moment(data).format(DATA_FORMAT);

  //TODO poprawić style, dorównać do siebie kafelki, oraz zrobic przycinanie tekstu

  return (
    <a
      href={url}
      target="_blank"
      className={styles.NewsTile}
    >
      <div>
        <div className={styles.imageContainer}>
          <img src={image}/>
        </div>
        <div className={styles.detailsContainer}>
          <h4 className={styles.title}>{title}</h4>
          <div className={styles.contentContainer}>{description}</div>
          <div className={styles.dateContainer}>{dateString}</div>
        </div>
      </div>
    </a>
  )
}

NewsTile.displayName = "NewsTile";

export default NewsTile

