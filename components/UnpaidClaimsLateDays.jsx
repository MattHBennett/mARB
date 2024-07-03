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

const UnpaidClaimsLateDays = async () => {
	const data = [
		['Claims', 'Late Days', { role: 'style' }],
		['Less than 5 Days Late', 10, 'color: lightgray'],
		['5 to 10 Days Late', 2, 'color: darkgray'],
		['11 to 20 Days Late', 5, 'color: gray'],
		['21 to 30 Days Late', 7, 'color: red'],
	];

	const options = {};

	return (
		<>
			<Chart
				chartType="ColumnChart"
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

export default UnpaidClaimsLateDays;
