import { selector } from 'recoil';
import { user } from './atom';

export const loggedIn = selector({
	key: 'loggedIn',
	get: ({ get }) => {
		const value = get(user);
		return !!value.email;
	},
});
