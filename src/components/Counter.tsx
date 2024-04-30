import CounterInput from './CounterInput';

const Counter = () => {
	// const count = useRecoilValue(counterState);
	return (
		<>
			<h2 className="counter-value">Counter Value :</h2>
			<CounterInput />
		</>
	);
};

export default Counter;
