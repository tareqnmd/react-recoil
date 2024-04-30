import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const AppLayout = ({ children }: { children: ReactNode }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};

export default AppLayout;
