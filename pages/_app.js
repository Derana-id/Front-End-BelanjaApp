import NextNProgress from 'nextjs-progressbar';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { wrapper, store } from '../redux/store';
import MainLayouts from '../layouts/main-layouts';
import SecondLayouts from '../layouts/second-layouts';
import '../styles/globals.css';

const layouts = {
  MainLayout: MainLayouts,
  SecondLayout: SecondLayouts
};

function NoLayout({ children }) {
  return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const Layouts = layouts[Component.layouts] || NoLayout;

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Layouts>
          <NextNProgress color="bg-primary" />
          <Component {...pageProps} />
        </Layouts>
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
