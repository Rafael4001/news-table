import React, { useEffect, useState } from 'react';

import { getNews } from '../../services/newsService'

import NewsTileList from '../NewsTileList'

import styles from './News.module.scss';


const News = () => {
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true)

    const leadData = async () => {
      const articles = await getNews();
      if (isFetching) {
        setArticles(articles)
      }
    };
    leadData();

    return setIsFetching(false)
  }, [isFetching])


  return (
    <div className={styles.wrapperContainer}>
      <NewsTileList newsList={articles}/>
    </div>
  )
}

News.displayName = "News";

export default News

