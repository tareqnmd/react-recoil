import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AppLayout from './components/RecoilRoot.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<AppLayout>
			<App />
		</AppLayout>
	</React.StrictMode>
);
