import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Career from './Components/Career/Career';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Services from './pages/Services';
function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<HeroSection />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='/service' element={<Services />} />
				<Route path='/career' element={<Career />} />
				<Route
					path='*'
					element={
						<div className='text-3xl text-center my-8'>404 Page Not Found</div>
					}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
