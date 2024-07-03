import { Schema, model, models } from 'mongoose';

const ClaimSchema = new Schema({
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	claimId: {
		type: String,
		required: true
	},
	claimAmount: {
		type: String,
		required: true
	},
	settledAmount: {
		type: String,
		required: true
	},
	settledPercentage: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	provider: {
		type: String,
		required: true
	}
});

const Claim = models.Claim || model('Claim', ClaimSchema);

export default Claim;