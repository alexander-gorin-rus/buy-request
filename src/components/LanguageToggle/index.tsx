import React, { memo, useState } from 'react';
import i18, { changeLanguage } from 'i18next';
import Cookies from 'js-cookie';

import { LANGUAGES } from '../../utils/constants';
import { LanguageBtn, LanguageContainer, LanguageSeparator } from './style';

const LanguageToggle = ({ hideMobile }: { hideMobile?: boolean }) => {
  const [selected, setSelected] = useState(i18.language);

  const onClick = (key: string) => {
    changeLanguage(key, () => {
      const [locale] = key.split('-');
      Cookies.set('locale', locale.toUpperCase());
      setSelected(key);
    });
  };

  return (
    <LanguageContainer hideMobile={hideMobile}>
      <LanguageBtn
        type="button"
        active={selected === LANGUAGES.ru}
        onClick={() => onClick(LANGUAGES.ru)}
      >
        RU
      </LanguageBtn>
      <LanguageSeparator />
      <LanguageBtn
        type="button"
        active={selected === LANGUAGES.en}
        onClick={() => onClick(LANGUAGES.en)}
      >
        EN
      </LanguageBtn>
    </LanguageContainer>
  );
};

export default memo(LanguageToggle);
