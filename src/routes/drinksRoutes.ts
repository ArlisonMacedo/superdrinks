import { FastifyInstance } from "fastify";
import { z } from 'zod'
import { prisma } from "../lib/prisma";

export default async function (app: FastifyInstance) {
    app.get('/drinks', async () => {
        const drinks = await prisma.drink.findMany()

        return drinks
    })

    app.post('/create-drink', async (request) => {
        const bodySchema = z.object({
            name: z.string(),
            description: z.string(),
            ingredients: z.string(),
            preparation: z.string(),
            image: z.string()
        })

        const { name, ingredients, description, preparation, image } = bodySchema.parse(request.body)

        const drink = await prisma.drink.create({
            data: {
                name,
                description,
                ingredients,
                preparation,
                image
            }
        })

        return drink
    })
}