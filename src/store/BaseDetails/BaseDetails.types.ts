export interface BaseDetailsInterface {
  country: string,
  resultsAmount: number,
  articles: any,
  onCountryChange: (event: any) => void
  onResultsAmountChange: (event: any) => void
}