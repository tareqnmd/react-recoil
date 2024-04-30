import { atom } from 'recoil';

const localValue = localStorage.getItem('user');

export const userDefaultValue = {
	name: '',
	email: '',
};

export const user = atom({
	key: 'user',
	default: localValue ? JSON.parse(localValue) : userDefaultValue,
});
