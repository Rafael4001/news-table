import React, { FC } from 'react';

// import { INewsTileList } from './NewsTileList.types'

import styles from './NewsTile.module.scss';


// const NewsTile: FC<IINewsTileUser> = ({table}) => {
const NewsTile = (props: any) => {
  const {title, data, description, image} = props
  const date = new Date(data)
  const dateString = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`

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

