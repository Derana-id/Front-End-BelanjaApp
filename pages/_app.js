import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import MainLayouts from '../layouts/main-layouts';
import SecondLayouts from '../layouts/second-layouts';
import Thridlayouts from '../layouts/thrid-layouts';
import '../styles/globals.css';

const layouts = {
  MainLayout: MainLayouts,
  SecondLayout: SecondLayouts,
  ThridLayout: Thridlayouts
};

function NoLayout({ children }) {
  return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
  const Layouts = layouts[Component.layouts] || NoLayout;
  return (
    <>
      <NextNProgress color="bg-primary" />
      <ToastContainer />
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </>
  );
}

export default MyApp;
