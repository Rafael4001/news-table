import React from 'react';
import { BaseDetailsContext } from '../../store/BaseDetails/BaseDetails'

import NewsTileList from '../NewsTileList'
import Filters from './Filters'

import styles from './News.module.scss';

import { getCountryName } from '../../utilities'


const News = () => (
  <BaseDetailsContext.Consumer>
    {(value) => {
      return (
        <div className={styles.wrapperContainer}>
          <div className={styles.filtersContainer}>
            <Filters/>
          </div>

          <div>
            Wyświetlono: <strong>{value?.resultsAmount}</strong> najnowszych wiadomości dla
            kraju: <strong>{getCountryName(value?.country)}</strong>

            <ul className={styles.newsListContainer}>
              <NewsTileList newsList={value?.articles}/>
            </ul>
          </div>
        </div>
      )
    }}
  </BaseDetailsContext.Consumer>
)
News.displayName = "News";

export default News

