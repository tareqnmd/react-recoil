import { useRecoilValue } from 'recoil';
import { counter } from '../recoil/count/atom';
import CounterInput from './CounterInput';

const Counter = () => {
	const count = useRecoilValue(counter);
	return (
		<>
			<h2 className="counter-value">Counter Value : {count ?? 0}</h2>
			<CounterInput />
		</>
	);
};

export default Counter;
