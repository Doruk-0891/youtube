import './App.css';
import Body from './components/Body';
import {Provider} from 'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';
import ErrorPage from './components/ErrorPage';

const routes = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchVideo />
      }
    ]
  }
]);

function App() {
  return (
    <Provider store={store}>
    <div className="max-h-screen">
      <RouterProvider router={routes}/>
    </div>
    </Provider>
  );
}

export default App;
