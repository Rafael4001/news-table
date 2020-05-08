import React, { FC } from 'react';

import { INewsTileList } from './NewsTileList.types'

import NewsTile from '../NewsTile'

import styles from './NewsTileList.module.scss';

const NO_RESULTS_TEXT = "no results";


// const NewsTile: FC<IINewsTileUser> = ({table}) => {  // TODO prepere this line
const NewsTileList = (props: any) => {
  const {newsList} = props
  console.log('newsList', newsList)

  if (newsList.length) {
    const usersList = newsList.map((news: any, id: number) => { //TODO correct type news
      return (
        <li key={id}>
          <NewsTile
            title={news.title}
            data={news.publishedAt}
            description={news.description}
            image={news.urlToImage}
          />
        </li>
      )
    })

    return (
      <div className={styles.newsListContainer}>
        {usersList}
      </div>
    )

  } else {
    return <span className={styles.noResultText}>{NO_RESULTS_TEXT}</span>
  }
}

NewsTileList.displayName = "NewsTileList";

export default NewsTileList

