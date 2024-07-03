import React from 'react';
// import { Chart } from 'react-google-charts';
import { Chart } from '@/lib/react-google-charts';

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

const ClaimStatuses = async () => {
	const claims = await fetchClaims();
	let unpaid = 0;
	let inProgress = 0;
	let readyForPayment = 0;
	let paid = 0;

	claims.map((claim) => {
		if (claim.status === 'UNPAID') {
			unpaid++;
		} else if (claim.status === 'IN PROGRESS') {
			inProgress++;
		} else if (claim.status === 'READY FOR PAYMENT') {
			readyForPayment++;
		} else if (claim.status === 'PAID') {
			paid++;
		}
	});

	const data = [
		['Claims', 'Status'],
		[`Unpaid: ${unpaid}`, unpaid],
		[`In Progress: ${inProgress}`, inProgress],
		[`Ready for Payment: ${readyForPayment}`, readyForPayment],
		[`Paid: ${paid}`, paid],
	];

	const options = {
		pieHole: 0.4,
		is3D: false,
	};

	return (
		<>
			<Chart
				chartType="PieChart"
				width="100%"
				height="400px"
				data={data}
				options={options}
			/>
			{/* <p>Unpaid {unpaid}</p>
			<p>In Progress {inProgress}</p>
			<p>Ready for Payment {readyForPayment}</p> */}
		</>
	);
};

export default ClaimStatuses;
