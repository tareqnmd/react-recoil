import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { user } from '../recoil/user/atom';

const Login = () => {
	const [inputValue, setInputValue] = useState('');
	const [, setUser] = useRecoilState(user);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setUser({ email: inputValue });
	};
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value ?? '';
		setInputValue(value);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="login-area"
		>
			<input
				type="email"
				value={inputValue}
				onChange={changeHandler}
			/>
			<button>Login</button>
		</form>
	);
};

export default Login;
