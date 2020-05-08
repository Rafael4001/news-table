import React, { useEffect, useState } from 'react';

import { getNews } from '../../services/newsService'

import NewsTileList from '../NewsTileList'

import styles from './News.module.scss';


const COUNTRIES = [
  {name: "Polska", value: "poland"},
  {name: "Niemcy", value: "germany"},
  {name: "Czechy", value: "czechRepublic"}
]

const RESULTS_AMOUNT_OPTIONS = [
  {name: "10", value: 10},
  {name: "20", value: 20},
  {name: "50", value: 50},
  {name: "100", value: 100},
]


const News = () => {
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [country, setCountry] = useState(COUNTRIES[0].value);
  const [resultsAmount, setResultsAmount] = useState(0);


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


  const handleResultsAmountChange = (value: any) => (   // TODO set correct type
    setResultsAmount(value)
  )

  const getFilters = () => (
    <div className={styles.filtersContainer}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.labelContainer}>Kraj: </label>
        <select
          id="country"
          name="country"
          onChange={(event) => setCountry(event.target.value)}
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
          // onChange={(event) => setResultsAmount(event.target.value)}
          onChange={(event) => handleResultsAmountChange(event.target.value)}
          value={resultsAmount}
        >
          {RESULTS_AMOUNT_OPTIONS.map((amount) => (
            <option key={amount.name} value={amount.value}>{amount.name}</option>
          ))}
        </select>
      </div>
    </div>
  )


  return (
    <div className={styles.wrapperContainer}>
      {/*TODO to correction multiselect*/}
      {getFilters()}

      <div>
        {/*TODO poprawić, nazwe kraju odpowiednie tlumaczenie*/}
        Wyświetlono: {articles.length} najnowszych wiadomości dla kracu: <strong>{country}</strong>

        <ul>
          <NewsTileList newsList={articles}/>
        </ul>
      </div>
    </div>
  )
}

News.displayName = "News";

export default News

