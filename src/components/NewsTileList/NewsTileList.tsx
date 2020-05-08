import React, { FC } from 'react';

import { INewsTileList, INewsList } from './NewsTileList.types'

import NewsTile from '../NewsTile'

import styles from './NewsTileList.module.scss';

const NO_RESULTS_TEXT = "no results";


const NewsTileList: FC<INewsTileList> = ({newsList}) => {

  if (newsList?.length) {
    const usersList = newsList.map((news: INewsList, id: number) => (
      <li key={id}>
        <NewsTile
          title={news.title}
          data={news.publishedAt}
          description={news.description}
          image={news.urlToImage}
          url={news.url}
        />
      </li>
    ))

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

