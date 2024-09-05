import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import {Provider} from 'react-redux';
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchVideo from './components/WatchVideo';

const routes = createBrowserRouter([
  {
    path:'/',
    element: <Body />,
    errorElement: <h2>Error</h2>,
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
      <Header />
      <RouterProvider router={routes}/>
    </div>
    </Provider>
  );
}

export default App;
