import React from 'react';
import Link from 'next/link';

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

const ClaimsPage = async () => {
	const claims = await fetchClaims();

	return (
		<div className="container-xl lg:container m-auto px-4 py-6">
			{claims.length === 0 ? (
				<p>No Claims Available</p>
			) : (
				<>
					<h1 className="text-5xl py-5">Claims</h1>
					<table className="table-auto border w-full text-left my-5">
						<thead className="uppercase bg-gray-50 text-gray-700">
							<tr>
								<th className="px-6 py-4">Claim ID</th>
								<th className="px-6 py-4">Claimed Amount</th>
								<th className="px-6 py-4">Settled Amount</th>
								<th className="px-6 py-4">Settled Percentage</th>
								<th className="px-6 py-4">Status</th>
								<th className="px-6 py-4">Provider</th>
								<th className="px-6 py-4">Creation Date</th>
								<th className="px-6 py-4">Action</th>
							</tr>
						</thead>
						<tbody>
							{claims.map((claim, index) => (
								<tr key={index} className="bg-white border-b">
									<td className="px-6 py-4">{claim.claimId}</td>
									<td className="px-6 py-4">{claim.claimAmount}</td>
									<td className="px-6 py-4">{claim.settledAmount}</td>
									<td className="px-6 py-4">{claim.settledPercentage}</td>
									<td
										className={`px-6 py-4 font-semibold ${
											claim.status === 'PAID'
												? 'text-green-500'
												: claim.status === 'UNPAID'
												? 'text-red-500'
												: claim.status === 'READY FOR PAYMENT'
												? 'text-blue-500'
												: claim.status === 'IN PROGRESS'
												? 'text-blue-500'
												: ''
										}`}
									>
										{claim.status}
									</td>
									<td className="px-6 py-4">{claim.provider}</td>
								</tr>
							))}
						</tbody>
					</table>
				</>
			)}
			<Link href="/">Go Home</Link>
		</div>
	);
};

export default ClaimsPage;
