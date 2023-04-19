import './App.css';
import Main from './components/Main'
import Cart from './components/Cart'
import cartReducer, { cartInitialState } from './state/reducer';
import { CartStateProvider } from './state/StateProvider'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
        path: "/",
        element:<Main />,
    },
    {
        path: "/place-order",
        element: <Cart />,
    },
    ]);
  return (
    <CartStateProvider initialState={ cartInitialState } reducer={ cartReducer } >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CartStateProvider>
    
  );
}

export default App;
