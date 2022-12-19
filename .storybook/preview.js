import React from 'react';
import { theme } from '../src/utils/theme';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { i18next } from '../src/i18next';
import store from '../src/core/store';
import { BrowserRouter } from 'react-router-dom';

import { I18nextProvider } from 'react-i18next';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}


export const decorators = [
  (Story) => (
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  ),
];