import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomeLayout,
   Landing,
   Error,
   Products,
   SingleProduct,
   Cart,
   About,
   Register,
   Login,
   Checkout,
   Orders } from './pages';
import { ErrorElement } from './components';

import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout />,
    //pages that share a layout
    errorElement:<Error />,
    //Error Page
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />,
        },
      {
        path:'cart',
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path:'products',
        element: <Products />,
        errorElement: <ErrorElement />
      },
      {
        path:'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />
      },
      {
        path:'about',
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path:'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />
      },
      {
        path:'orders',
        element: <Orders />,
        errorElement: <ErrorElement />
      }
    ]
  },
  //pages that don't share the layout.
  {
    path:'/login',
    element: <Login />,
    errorElement: <Error />
  },
  {
    path:'/register',
    element: <Register />,
    errorElement: <Error />
  }
]);

const App = () => {
return(<RouterProvider router={router} />)
}

export default App;