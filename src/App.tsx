import { useRecoilValue } from 'recoil';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { loggedIn } from './recoil/user/selector';
const App = () => {
	const isLoggedIn = useRecoilValue(loggedIn);
	return <>{isLoggedIn ? <Home /> : <Login />}</>;
};

export default App;
