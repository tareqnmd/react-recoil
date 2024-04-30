import { useRecoilState } from 'recoil';
import { user, userDefaultValue } from '../recoil/user/atom';

const Navbar = () => {
	const [userValue, setUserValue] = useRecoilState(user);
	const logOutHandler = () => {
		setUserValue(userDefaultValue);
	};
	return (
		<nav className="nav-area">
			<strong>Recoil</strong>
			<span className="sm-none">
				{userValue?.email}({userValue?.name})
			</span>
			<span className="lg-none">{userValue?.name}</span>
			<button onClick={logOutHandler}>Logout</button>
		</nav>
	);
};

export default Navbar;
