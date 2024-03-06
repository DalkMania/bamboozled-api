import plugin from "fastify-plugin";
// eslint-disable-next-line import/no-unresolved
import { JSONFilePreset } from "lowdb/node";
/**
 * This plugin adds LowDB to Fastify
 */
export default plugin(async function (fastify) {
  const database = await JSONFilePreset("db.json", {});
  await database.read();

  database.data = database.data || { puzzles: [], answers: [] };

  await database.write();

  fastify.decorate("db", database);
});
