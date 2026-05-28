import { prisma } from '@/lib/prisma';
import { leadSchema } from '@/lib/validations/lead';
import { ZodError } from 'zod';

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const validatedData = leadSchema.parse(body);

		const lead = await prisma.lead.create({
			data: validatedData,
		});

		return Response.json(lead, {
			status: 201,
		});
	} catch (error) {
		if (error instanceof ZodError) {
			return Response.json(
				{
					issues: error.issues,
				},
				{
					status: 400,
				},
			);
		}

		console.error(error);

		return Response.json(
			{
				error: 'Ошибка сервера',
			},
			{
				status: 500,
			},
		);
	}
}
