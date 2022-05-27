import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
function App() {
	return (
		<BrowserRouter>
      <NavBar />
      <HeroSection />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
