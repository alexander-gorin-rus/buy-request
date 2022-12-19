import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { client } from './apollo';
import store from './core/store';
import reportWebVitals from './reportWebVitals';
import sagaMiddleware from './core/sagas/sagaMiddleware';
import rootSaga from './core/sagas';
import Routes from './core/router';
import i18next from './i18next';
import { theme } from './utils/theme';
import GlobalStyle from './core/layouts/globalStyles/globalStyles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <ApolloProvider client={client}>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <React.StrictMode>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
            <ToastContainer autoClose={5000} closeOnClick pauseOnHover />
          </ThemeProvider>
        </React.StrictMode>
      </Provider>
    </I18nextProvider>
  </ApolloProvider>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
