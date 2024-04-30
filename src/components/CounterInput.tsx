import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countDefaultValue, counter } from '../recoil/count/atom';

const CounterInput = () => {
	const [, setCount] = useRecoilState(counter);
	const [inputValue, setInputValue] = useState(0);

	const simpleCounter = (number: number) => {
		setCount((prev) => (prev + number >= 0 ? prev + number : prev));
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
			<div className="counter-btns">
				<button onClick={() => simpleCounter(1)}>Increment 1</button>
				<button onClick={() => simpleCounter(-1)}>Decrement 1</button>
				<button onClick={reset}>Reset</button>
			</div>
			<div className="dynamic-area">
				<input
					type="number"
					value={inputValue}
					onChange={changeHandler}
				/>
				<button onClick={() => simpleCounter(inputValue)}>Dynamic</button>
			</div>
		</div>
	);
};

export default CounterInput;
