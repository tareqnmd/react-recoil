import { selector } from 'recoil';
import { counter } from './atom';

export const counterOddEven = selector({
	key: 'counterOddEven',
	get: ({ get }) => {
		const value = get(counter);
		return Number(value % 2) === 0 ? 'Even' : 'ODD';
	},
});
