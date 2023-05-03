import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { buildSchema } from "type-graphql";

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema()
  const server = new ApolloServer({ schema })
  await server.listen(4000)
  console.log("Server has started!")
}
main()