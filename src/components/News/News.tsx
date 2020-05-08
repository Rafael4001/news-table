import React, { useEffect, useState } from 'react';

import { getNews } from '../../services/newsService'

import NewsTileList from '../NewsTileList'

import styles from './News.module.scss';

import { COUNTRIES, RESULTS_AMOUNT_OPTIONS } from '../../constants'

import { getCountryName } from '../../utilities'


const News = () => {
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [country, setCountry] = useState(COUNTRIES[0].value);
  const [resultsAmount, setResultsAmount] = useState(RESULTS_AMOUNT_OPTIONS[0].value);


  useEffect(() => {
    fetchData()
  }, [isFetching])

  const fetchData = () => {
    setIsFetching(true)

    const leadData = async () => {
      const articles = await getNews(country, resultsAmount);
      if (isFetching) {
        setArticles(articles)
      }
    };
    leadData();

    return setIsFetching(false)
  }


  const handleResultsAmountChange = async (value: any) => {
    await setResultsAmount(value);
    await fetchData();
  }

  const handleCountryChange = async (country: string) => {
    await setCountry(country);
    await fetchData();
  }

  const getFilters = () => (
    <>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.labelContainer}>Kraj: </label>
        <select
          id="country"
          name="country"
          onChange={(event) => handleCountryChange(event.target.value)}
          value={country}
        >
          {COUNTRIES.map((country) => (
            <option key={country.name} value={country.value}>{country.name}</option>
          ))}
        </select>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.labelContainer}>Wyświetl: </label>
        <select
          id="resultsAmount"
          name="resultsAmount"
          onChange={(event) => handleResultsAmountChange(event.target.value)}
          value={resultsAmount}
        >
          {RESULTS_AMOUNT_OPTIONS.map((amount) => (
            <option key={amount.name} value={amount.value}>{amount.name}</option>
          ))}
        </select>
      </div>
    </>
  )

  return (
    <div className={styles.wrapperContainer}>
      {/*TODO to correction multiselect*/}
      <div className={styles.filtersContainer}>
        {getFilters()}
      </div>

      <div>
        {/*TODO poprawić, nazwe kraju odpowiednie tlumaczenie*/}
        Wyświetlono: <strong>{resultsAmount}</strong> najnowszych wiadomości dla
        kraju: <strong>{getCountryName(country)}</strong>

        <ul className={styles.newsListContainer}>
          <NewsTileList newsList={articles}/>
        </ul>
      </div>
    </div>
  )
}

News.displayName = "News";

export default News

