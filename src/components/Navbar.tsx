import { useRecoilState } from 'recoil';
import { user, userDefaultValue } from '../recoil/user/atom';

const Navbar = () => {
	const [userValue, setUserValue] = useRecoilState(user);
	const logOutHandler = () => {
		setUserValue(userDefaultValue);
		localStorage.removeItem('user');
	};
	return (
		<nav className="nav-area">
			<strong>Recoil</strong>
			{userValue?.email && (
				<>
					<span className="sm-none">
						{userValue?.email}({userValue?.name})
					</span>
					<span className="lg-none">{userValue?.name}</span>
					<button onClick={logOutHandler}>Logout</button>
				</>
			)}
		</nav>
	);
};

export default Navbar;
