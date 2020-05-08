import React, { FC } from 'react';
import moment from 'moment';
// import { INewsTileList } from './NewsTileList.types'

import styles from './NewsTile.module.scss';


// const NewsTile: FC<IINewsTileUser> = ({table}) => {
const NewsTile = (props: any) => {
  const {title, data, description, image} = props
  const dateString = moment(data).format("DD/MM/YYYY HH:MM");


  //TODO poprawić style, dorównać do siebie kafelki
  //TODO Linki zapiąć w kafelkach i zrobić hover

  return (
    <div className={styles.NewsTile}>
      <div className={styles.imageContainer}>
        <img src={image}/>
      </div>
      <div className={styles.detailsContainer}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.contentContainer}>{description}</div>

        <div className={styles.dateContainer}>{dateString}</div>
      </div>
    </div>
  )
}

NewsTile.displayName = "NewsTile";

export default NewsTile

