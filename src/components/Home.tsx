import { useRecoilValue } from 'recoil';
import { loggedIn } from '../recoil/user/selector';
import Counter from './Counter';
import Login from './Login';

const Home = () => {
	const isLoggedIn = useRecoilValue(loggedIn);
	return <>{isLoggedIn ? <Counter /> : <Login />}</>;
};

export default Home;
