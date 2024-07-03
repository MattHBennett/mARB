import React from 'react';
import Navbar from '@/components/Navbar';
import AuthProvider from '@/components/AuthProvider';
import '@/assets/styles/globals.css';

export const metadata = {
	title: 'mARB',
	description:
		'We help provider networks (hospitals and doctors) quickly settle out of network medical claims with insurance payers.',
	keywords:
		'marb, health, healtcare, claims, out of network, out of network claims',
};

const MainLayout = ({ children }) => {
	return (
		<AuthProvider>
			<html lang="en">
				<body>
					<Navbar />
					<main>{children}</main>
				</body>
			</html>
		</AuthProvider>
	);
};

export default MainLayout;
