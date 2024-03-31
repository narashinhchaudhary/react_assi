
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './assignment/Cart';



function App() {
  return (        
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<> <Cart/> </>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
