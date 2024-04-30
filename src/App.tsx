import { useRecoilValue } from 'recoil';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { loggedIn } from './recoil/user/selector';
const App = () => {
	const isLoggedIn = useRecoilValue(loggedIn);
	return (
		<div className="app-area">
			<Navbar />
			{isLoggedIn ? <Home /> : <Login />}
		</div>
	);
};

export default App;
