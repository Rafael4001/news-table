import React from 'react';

import styles from "../News.module.scss";

import { COUNTRIES, RESULTS_AMOUNT_OPTIONS } from "../../../constants";
import { BaseDetailsContext } from '../../../store/BaseDetails/BaseDetails'


const Filters = () => (
  <BaseDetailsContext.Consumer>
    {value => (
      <>
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.labelContainer}>Kraj: </label>
          <select
            id="country"
            name="country"
            onChange={(event) => value?.onCountryChange(event.target.value)}
            value={value?.country}
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
            onChange={(event) => value?.onResultsAmountChange(event.target.value)}
            value={value?.resultsAmount}
          >
            {RESULTS_AMOUNT_OPTIONS.map((amount) => (
              <option key={amount.name} value={amount.value}>{amount.name}</option>
            ))}
          </select>
        </div>
      </>
    )}
  </BaseDetailsContext.Consumer>
)

export default Filters