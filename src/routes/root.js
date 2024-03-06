import { getCurrentPuzzle } from "../schemas/root.js";

/**
 * Root routes
 *
 * @type {import('fastify').FastifyPluginAsync}
 */
export default async function (fastify) {
  const currentPuzzle = () => {
    return fastify.db.data.puzzles.find((puzzle) => puzzle.current === true);
  };
  fastify.get("/", { schema: getCurrentPuzzle }, () => ({
    ...currentPuzzle(),
  }));
}
