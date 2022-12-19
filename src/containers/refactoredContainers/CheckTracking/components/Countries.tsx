import React from 'react';

import { useTranslation } from 'react-i18next';
import {
  StyledCountries,
  StyledCountryDestation,
  StyledCountyLabel,
  StyledNameCountry,
  StyledCountryDeparture,
} from '../styles';

function Countries() {
  const { t } = useTranslation('checkTracking');

  return (
    <StyledCountries>
      <StyledCountryDestation>
        <StyledCountyLabel>{t('countries.destination')}</StyledCountyLabel>
        <StyledNameCountry>Belarus</StyledNameCountry>
      </StyledCountryDestation>
      <StyledCountryDeparture>
        <StyledCountyLabel>{t('countries.departure')}</StyledCountyLabel>
        <StyledNameCountry>China</StyledNameCountry>
      </StyledCountryDeparture>
    </StyledCountries>
  );
}

export default Countries;
