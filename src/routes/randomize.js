import { randomizePuzzle } from "../schemas/randomize.js";

/**
 * Root routes
 *
 * @type {import('fastify').FastifyPluginAsync}
 */
export default async function (fastify) {
  const currentPuzzle = fastify.db.data.puzzles.find((puzzle) => puzzle.current === true);
  currentPuzzle.current = false;
  currentPuzzle.hasBeen = true;

  const puzzles = fastify.db.data.puzzles.filter((puzzle) => puzzle.hasBeen !== true);
  const randomPuzzle = puzzles.sort(() => 0.5 - Math.random())[0];
  randomPuzzle.current = true;
  fastify.db.write();

  fastify.get("/randomize", { schema: randomizePuzzle }, () => ({
    text: "Puzzle Has Been Changed",
  }));
}
