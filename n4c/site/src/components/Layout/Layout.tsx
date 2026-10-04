import { Outlet } from 'react-router-dom';
import './layout.scss';
import Header from '../header/header';
import Footer from '../footer/footer';
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