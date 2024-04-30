import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { counter } from '../recoil/count/atom';

const CounterInput = () => {
	const [, setCount] = useRecoilState(counter);
	const [inputValue, setInputValue] = useState(0);

	const incrementOne = () => {
		setCount((prev) => prev + 1);
	};

	const dynamicIncrement = () => {
		setCount((prev) => prev + inputValue);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: number = e.target.value ? Number(e.target.value) ?? 0 : 0;
		setInputValue(value);
	};

	return (
		<div className="counter-area">
			<input
				type="number"
				value={inputValue}
				onChange={changeHandler}
			/>
			<div className="counter-btns">
				<button onClick={incrementOne}>Increment 1</button>
				<button onClick={dynamicIncrement}>Dynamic Increment</button>
			</div>
		</div>
	);
};

export default CounterInput;
