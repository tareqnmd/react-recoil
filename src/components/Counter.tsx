import { useRecoilValue } from 'recoil';
import { counter } from '../recoil/count/atom';
import { counterOddEven } from '../recoil/count/selector';
import CounterInput from './CounterInput';

const Counter = () => {
	const count = useRecoilValue(counter);
	const oddEven = useRecoilValue(counterOddEven);
	return (
		<>
			<h2 className="counter-value">
				Counter Value : {count ?? 0}({oddEven})
			</h2>
			<CounterInput />
		</>
	);
};

export default Counter;
