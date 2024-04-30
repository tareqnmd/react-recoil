import { atom } from 'recoil';

export const countDefaultValue = 0;

export const counter = atom({
	key: 'counter',
	default: countDefaultValue,
});
