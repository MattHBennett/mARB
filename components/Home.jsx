'use client';
import React from 'react';
// import { useState } from 'react';
import { useSession } from 'next-auth/react';
import InfoBoxes from '@/components/InfoBoxes';

const Home = () => {
	const { data: session } = useSession();
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<>
			{!session && (
				<div className="text-center">
					<h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mt-4 mb-4">
						Welcome to mArb
					</h1>
					<p>
						We help provider networks (hospitals and doctors) quickly settle out
						of network medical claims with insurance payers.
					</p>
				</div>
			)}

			{session && <InfoBoxes />}
		</>
	);
};

export default Home;
