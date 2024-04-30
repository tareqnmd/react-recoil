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

	return (
		<div className="counter-area">
			<input
				type="number"
				value={inputValue}
				onChange={(e) => {
					setInputValue(Number(e.target.value));
				}}
			/>
			<div className="counter-btns">
				<button onClick={() => incrementOne()}>Increment 1</button>
				<button onClick={() => dynamicIncrement()}>Dynamic Increment</button>
			</div>
		</div>
	);
};

export default CounterInput;
