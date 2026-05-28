import { z } from 'zod';
import { ServiceType } from '@/src/generated/prisma/enums';

const emptyToUndefined = (v: unknown) => (v === '' ? undefined : v);
export const leadSchema = z.object({
	name: z.string().trim().min(1, 'Имя обязательно').max(40, 'Слишком длинное имя'),
	phone: z.e164('Неверный номер'),
	email: z.email().min(1, 'Email обязателен'),
	serviceType: z.enum(ServiceType),
	comment: z.preprocess(emptyToUndefined, z.string().max(1000, 'Слишком длинный коментарий').optional()),
});

