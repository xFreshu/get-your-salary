import { GlobalStyle } from '../styles/GlobalStyle';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }) => {
  const [user, getUser] = useState({});
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} user={user} getUser={getUser} />
    </>
  );
};

export default MyApp;
