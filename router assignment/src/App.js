
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Adashboard from '../src/admin/pages/Adashboard';
import Add_categories from '../src/admin/pages/Add_categories'
import Add_product from '../src/admin/pages/Add_product'
import Alogin from '../src/admin/pages/Alogin'







function App() {
  return ( 
    
   
    <BrowserRouter>
    <Routes>
      {
        //website
      }
      
  
<Route exact path='/' element={<> <Adashboard/> </>}></Route>
<Route exact path='/Add_categories' element={<> <Add_categories/> </>}></Route>
<Route  path='/Add_product' element={<> <Add_product/> </>}></Route>
<Route  path='/Alogin' element={<> <Alogin/> </>}></Route>








     


   

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
