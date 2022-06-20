import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SingleBlog from './Components/Blog/SingleBlog';
import Career from './Components/Career/Career';
import Footer from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import NavBar from './Components/NavBar/NavBar';
import SingleNews from './Components/News/SingleNews';
import SingleService from './Components/Service/SingleService';
import TermsOfService from './Components/TermsofService/TermsOfService';
import Blogs from './pages/Blogs';
import CookiePolicy from './pages/CookiePolicy';
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
				<Route path='/services' element={<Services />} />
				<Route path='/career' element={<Career />} />
				<Route path='/blog/:id' element={<SingleBlog />} />
				<Route path='/news/:id' element={<SingleNews />} />
				<Route path='/service/:id' element={<SingleService />} />
				<Route path='/terms_of_service' element={<TermsOfService />} />
				<Route path='/cookie_policy' element={<CookiePolicy />} />

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
