import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

// Example:
// db.snippet.create({
//     data: {
//         title: 'Title!',
//         code: 'const foo = () => {}'
//     }
// })
