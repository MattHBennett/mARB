import React from 'react';

async function fetchClaims() {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/claims`);

		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}

		return res.json();
	} catch (error) {
		console.log(error);
	}
}

const TopProvidersSettledPercentage = async () => {
	const claims = await fetchClaims();

	claims.sort((a, b) => {
		if (a.settledPercentage === 'None' && b.settledPercentage !== 'None') {
			return 1;
		} else if (
			a.settledPercentage !== 'None' &&
			b.settledPercentage === 'None'
		) {
			return -1;
		} else {
			return a.settledPercentage < b.settledPercentage ? 1 : -1;
		}
	});

	return (
		<>
			<h1>Top 4 Providers by Average Settled Percentage</h1>
			{claims.length === 0 ? (
				<p>No Claims Available</p>
			) : (
				<>
					{claims.slice(0, 4).map((claim, index) => (
						<div
							key={index}
							className="my-5 border grid grid-cols-4 gap-4 px-4 py-2"
						>
							<div className="flex flex-col">
								<p className="flex-grow mb-2">{claim.provider}</p>
								<p className="text-xs text-gray-400">Provider</p>
							</div>
							<div className="flex flex-col">
								<p className="flex-grow mb-2">{claim.claimAmount}</p>
								<p className="text-xs text-gray-400">Average Claimed Amount</p>
							</div>
							<div className="flex flex-col">
								<p className="flex-grow mb-2">{claim.settledAmount}</p>
								<p className="text-xs text-gray-400">Average Settled Amount</p>
							</div>
							<div className="flex flex-col">
								<p className="flex-grow mb-2">{claim.settledPercentage}</p>
								<p className="text-xs text-gray-400">
									Average Settled Percentage
								</p>
							</div>
						</div>
					))}
				</>
			)}
		</>
	);
};

export default TopProvidersSettledPercentage;
