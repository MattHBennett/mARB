import React from 'react';
import InfoBox from './InfoBox';
import ClaimStatuses from './ClaimStatuses';
import TopProvidersSettledPercentage from './TopProvidersSettledPercentage';
import UnpaidClaimsLateDays from './UnpaidClaimsLateDays';
import TopProvidersUnpaidClaims from './TopProvidersUnpaidClaims';

const InfoBoxes = () => {
	return (
		<section className="bg-gray-100">
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 rounded-lg">
					<div className="col-span-2">
						<InfoBox heading="Your Claim Statuses" backgroundColor="bg-white">
							<ClaimStatuses />
						</InfoBox>
					</div>
					<div className="col-span-3">
						<InfoBox
							heading="Provider Groups by Paid Claims - Settled Percentage"
							backgroundColor="bg-white"
							buttonInfo={{
								text: 'View All Providers',
								link: '/providers',
								backgroundColor: 'bg-blue-500',
							}}
						>
							<TopProvidersSettledPercentage />
						</InfoBox>
					</div>

					<div className="col-span-2">
						<InfoBox
							heading="Unpaid Claim by Late Days"
							backgroundColor="bg-white"
						>
							<UnpaidClaimsLateDays />
						</InfoBox>
					</div>

					<div className="col-span-3">
						<InfoBox
							heading="Unpaid Claims by Provider Group"
							backgroundColor="bg-white"
							buttonInfo={{
								text: 'View All Providers',
								link: '/providers',
								backgroundColor: 'bg-blue-500',
							}}
						>
							<TopProvidersUnpaidClaims />
						</InfoBox>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InfoBoxes;
