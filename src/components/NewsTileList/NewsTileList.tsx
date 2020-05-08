import React, { FC } from 'react';

import { INewsTileList } from './NewsTileList.types'

import styles from './NewsTileList.module.scss';

const NO_RESULTS_TEXT = "no results";


// const NewsTile: FC<IINewsTileUser> = ({table}) => {
const NewsTileList = (props: any) => {
  const {newsList} = props
  console.log('newsList', newsList)

  if (newsList.length) {
    const usersList = newsList.map((news: any, id: number) => { //TODO correct type news
      return (
        <li key={id}>
          <span>{id + 1}. </span> {news.title}
        </li>
      )
    })
    return <div>{usersList}</div>

  } else {
    return <span className={styles.noResultText}>{NO_RESULTS_TEXT}</span>
  }
}

NewsTileList.displayName = "NewsTileList";

export default NewsTileList

