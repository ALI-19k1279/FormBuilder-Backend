import "reflect-metadata";
import { createConnection } from "typeorm";
import { createServer } from "http";
import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import express from "express";
import { FormBuilderResolver } from "./resolvers/FormBuilderResolver";
import { ApolloServerPluginLandingPageGraphQLPlayground ,ApolloServerPluginDrainHttpServer} from "apollo-server-core";

const main=async ()=> {
  await createConnection()
    .then((connection) => {})
    .catch((error) => console.log(error));
    const apolloServer=new ApolloServer({
      schema:await buildSchema({
        resolvers:[FormBuilderResolver],
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
    const serverport=process.env.SERVER_PORT || 4000;
    app.listen(serverport, () => console.log(`server started on port ${serverport}`));    
  }
main().catch((err)=>console.error(err));