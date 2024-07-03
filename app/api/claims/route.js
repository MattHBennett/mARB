import connectDB from "@/config/database";
import Claim from "@/models/Claim";

// GET /api/claims
export const GET = async (request) => {
	try {
		await connectDB();

		const claims = await Claim.find({});

		return new Response(JSON.stringify(claims), { status: 200 });
	} catch (error) {
		console.log(error);
		return new Response('Something went wrong', { status: 500 });
	}
};