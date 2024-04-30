import { atom } from 'recoil';

export const userDefaultValue = {
	name: '',
	email: '',
};

export const user = atom({
	key: 'user',
	default: userDefaultValue,
});
