import fastify from "fastify";
import drinksRoutes from "./routes/drinksRoutes";

const app = fastify()

app.register(drinksRoutes)

app.listen({
    port: 3333,
}, () => {
    console.log('server is running on http://localhost:3333')
})