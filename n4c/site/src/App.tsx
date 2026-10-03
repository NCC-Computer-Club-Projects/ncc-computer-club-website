import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Layout from './components/layout/layout';
import KeyList from './assets/scripts/utils/key-list';
import * as PAGES from './pages';

export default function App() {
  // Set home to front of the array
  let pages = Object.keys(PAGES);
  const homeIdx = pages.findIndex(page => /home/i.test(page));
  const homePage = pages[homeIdx];
  pages.splice(homeIdx, 1);
  pages.unshift(homePage);

  // Filter page navigation items in layout header
  const pageNavList = pages.filter(pageName => !/(error(404)?|index|contact)/i.test(pageName));

  // Create routes from PAGES modules
  const pagesArr = Object.values(PAGES); // Array of page modules
  const routeKeys = new KeyList(); // Initialize route key list

  const routes = (() => {
    return pagesArr.map(PageComponent => { // Access page module
      const name = PageComponent.name.toLowerCase();
      const newKey = routeKeys.generateKey(name); // Generate key

      switch (name) {
        case 'error':
        case 'error404':
          return <Route key={newKey} path="*" element={<PageComponent />} />;
        case 'home':
          return <Route key={newKey} path="/" element={<PageComponent />} />;
        default:
          return <Route key={newKey} path={name} element={<PageComponent />} />;
      }
    });
  })();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout pageList={pageNavList} />}>
        {routes}
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}