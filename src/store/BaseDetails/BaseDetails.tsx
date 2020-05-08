import React, { useEffect, useState } from 'react';

import { COUNTRIES, RESULTS_AMOUNT_OPTIONS } from "../../constants";

import { getNews } from "../../services/newsService";

import { BaseDetailsInterface } from './BaseDetails.types'

export const BaseDetailsContext = React.createContext<BaseDetailsInterface | null>(null)

const countryLocalStorage = localStorage.getItem("country") || COUNTRIES[0].value
const pageSize = localStorage.getItem("pageSize") || RESULTS_AMOUNT_OPTIONS[0].value
const pageSizeLocalStorage = Number(pageSize);


const BaseDetails = (props: any) => {
  const [articles, setArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [country, setCountry] = useState(countryLocalStorage);
  const [resultsAmount, setResultsAmount] = useState(pageSizeLocalStorage);

  const handleCountryChange = async (country: string) => {
    localStorage.setItem('country', country)
    await setCountry(country);
    await fetchData();
  }

  const handleResultsAmountChange = async (value: number) => {
    localStorage.setItem('pageSize', value.toString())
    await setResultsAmount(value);
    await fetchData();
  }


  const appContextValues: BaseDetailsInterface = {
    country,
    resultsAmount,
    onCountryChange: ((countryCode) => handleCountryChange(countryCode)),
    onResultsAmountChange: ((amount) => handleResultsAmountChange(amount)),
    articles,
  };

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

  return (
    <BaseDetailsContext.Provider value={appContextValues}>
      {props.children}
    </BaseDetailsContext.Provider>
  )
}
export default BaseDetails;