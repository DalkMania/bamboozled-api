/**
 * @type {import('fastify').FastifySchema}
 */
export const randomizePuzzle = {
  response: {
    200: {
      type: "object",
      properties: {
        text: { type: "string" },
      },
    },
  },
};
