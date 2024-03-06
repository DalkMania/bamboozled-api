import plugin from "fastify-plugin";
// eslint-disable-next-line import/no-unresolved
import { JSONFilePreset } from "lowdb/node";
import path from "node:path";
import { fileURLToPath } from "node:url";
/**
 * This plugin adds LowDB to Fastify
 */
export default plugin(async function (fastify) {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const database = await JSONFilePreset(path.join(dirname, "..", "/db/db.json"), {});
  await database.read();

  database.data = database.data || { puzzles: [], answers: [] };

  await database.write();

  fastify.decorate("db", database);
});
