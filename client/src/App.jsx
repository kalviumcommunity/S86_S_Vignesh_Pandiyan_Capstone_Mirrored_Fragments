import Landing from './components/pages/Landing';
import Profile from './components/pages/Profile';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <div className='min-h-screen bg-white'>

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>         
          <Route path='/profile' element={<Profile/>}/>
        </Routes>    
    </BrowserRouter>
    


    </div>

    </>
  );
}


export default App
