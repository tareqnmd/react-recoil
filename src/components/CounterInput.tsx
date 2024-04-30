import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countDefaultValue, counter } from '../recoil/count/atom';

const CounterInput = () => {
	const [, setCount] = useRecoilState(counter);
	const [inputValue, setInputValue] = useState(0);

	const simpleCounter = (number: number) => {
		setCount((prev) => prev + number);
	};

	const dynamicIncrement = () => {
		setCount((prev) => prev + inputValue);
	};

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value: number = e.target.value ? Number(e.target.value) ?? 0 : 0;
		setInputValue(value);
	};

	const reset = () => {
		setCount(countDefaultValue);
	};

	return (
		<div className="counter-input-area">
			<input
				type="number"
				value={inputValue}
				onChange={changeHandler}
			/>
			<div className="counter-btns">
				<button onClick={() => simpleCounter(1)}>Increment 1</button>
				<button onClick={() => simpleCounter(-1)}>Decrement 1</button>
				<button
					disabled={inputValue < 0}
					onClick={dynamicIncrement}
				>
					Dynamic Value
				</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
};

export default CounterInput;
