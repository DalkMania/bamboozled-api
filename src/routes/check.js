import { checkAnswer } from "../schemas/check.js";

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

  fastify.post("/check", { schema: checkAnswer }, async (request, reply) => {
    const { answer } = request.body;
    const currentAnswer = getCurrentAnswer();
    const result = answer.localeCompare(currentAnswer);

    if (result === 0) {
      reply.send({
        text: "Congratulations You Won !!",
        result: "Correct",
      });
    } else {
      reply.send({
        text: "Sorry Your Guess was Incorrect. Wan't to try Again?",
        result: "Incorrect",
      });
    }
  });
}
