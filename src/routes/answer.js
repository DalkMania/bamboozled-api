import { getAnswer } from "../schemas/answer.js";

/**
 * Root routes
 *
 * @type {import('fastify').FastifyPluginAsync}
 */
export default async function (fastify) {
  const getCurrentAnswer = () => {
    const currentPuzzle = fastify.db.data.puzzles.find((puzzle) => puzzle.current === true);
    const currentAnswer = fastify.db.data.answers.find(
      (answer) => answer.id === currentPuzzle.id.replace("puzzle", "answer")
    );

    return currentAnswer;
  };

  fastify.get("/answer", { schema: getAnswer }, () => ({
    ...getCurrentAnswer(),
  }));
}
