import fastify from "fastify"
import postgres from "@fastify/postgres"

const application = fastify({ logger: true })

application.get("/", async () => {
  return "hello"
})

application.listen({ port: 3000 })
  .catch((error) => {
    application.log.error(error)
    process.exit(1)
  })