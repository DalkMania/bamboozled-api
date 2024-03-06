import sensiblePlugin from "./plugins/sensible.js";
import lowDBPlugin from "./plugins/lowdb.js";
import rootRoute from "./routes/root.js";
import answerRoute from "./routes/answer.js";
import randomizeRoute from "./routes/randomize.js";
import checkRoute from "./routes/check.js";

/** @type {import('fastify').FastifyPluginAsync} */
export default async function (fastify, options) {
  fastify.register(sensiblePlugin);
  fastify.register(lowDBPlugin);

  fastify.register(rootRoute);
  fastify.register(answerRoute);
  fastify.register(randomizeRoute);
  fastify.register(checkRoute);
}
