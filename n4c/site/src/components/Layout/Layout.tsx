import { Outlet } from 'react-router-dom';
import './Layout.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutContext } from '../../contexts';

interface LayoutProps {
  pageList: string[];
}

export default function Layout({ pageList }: LayoutProps) {
  return (
    <LayoutContext.Provider value={pageList}>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContext.Provider>
  );
}
