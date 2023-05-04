import "reflect-metadata";
import { createConnection } from "typeorm";
import { createServer } from "http";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import { HelloResolver } from "./resolvers/Temp";
import { ApolloServerPluginLandingPageGraphQLPlayground ,ApolloServerPluginDrainHttpServer} from "apollo-server-core";

const main=async ()=> {
  await createConnection()
    .then((connection) => {})
    .catch((error) => console.log(error));
    const apolloServer=new ApolloServer({
      schema:await buildSchema({
        resolvers:[HelloResolver],
        validate:false
        
      }),
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
      ]
    })
    await apolloServer.start()
    const app=express();
    apolloServer.applyMiddleware({ app });
    app.get("/", (_req, res) => res.send("Working"));
    const serverport=process.env.SERVER_PORT
    app.listen(serverport, () => console.log(`server started on port ${serverport}`));

    
  }
main().catch((err)=>console.error(err));