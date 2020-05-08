import { COUNTRIES_DETAILS } from "./constants";

export const getCountryName = (countryCode: string | undefined) => {
  switch (countryCode) {
    case COUNTRIES_DETAILS.pl.code:
      return COUNTRIES_DETAILS.pl.name;
    case COUNTRIES_DETAILS.de.code:
      return COUNTRIES_DETAILS.de.name;
    case COUNTRIES_DETAILS.cz.code:
      return COUNTRIES_DETAILS.cz.name;
  }
}