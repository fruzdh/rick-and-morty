import './App.css';
import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterDetail from './pages/CharacterDetail';
import Home from './pages/Home';
import LocationDetail from './pages/LocationDetail';

function App() {
  return (
    <Router>
      <Box h={'100vh'} w={'100vw'} bgColor={'#FFFFBE'} overflowY={'scroll'} display={'flex'} justifyContent={'center'}>
        <Box maxH={'100vh'} maxW={'1280px'} p={'10px'}>
          <Routes>
            <Route path="/character/:id" Component={CharacterDetail} />
            <Route path="/location/:name" Component={LocationDetail} />
            <Route path='/' Component={Home} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
