import MainLayouts from '../layouts/main-layouts';
import SecondLayouts from '../layouts/second-layouts';
import Thridlayouts from '../layouts/thrid-layouts';
import '../styles/globals.css';

const layouts = {
  MainLayout: MainLayouts,
  SecondLayout: SecondLayouts,
  ThridLayout: Thridlayouts
};

const NoLayout = ({ children }) => {
  return <>{children}</>;
};

function MyApp({ Component, pageProps }) {
  const Layouts = layouts[Component.layouts] || NoLayout;
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}

export default MyApp;
