import { atom, selector } from 'recoil';

export const counter = atom({
	key: 'counter',
	default: 0,
});

export const counterState = selector({
	key: 'counter',
	get: ({ get }) => {
		const value = get(counter);
		return value;
	},
});
