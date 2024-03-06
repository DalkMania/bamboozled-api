/**
 * @type {import('fastify').FastifySchema}
 */
export const getCurrentPuzzle = {
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "string" },
        puzzleImage: { type: "string" },
        current: { type: "boolean" },
        hasBeen: { type: "boolean" },
      },
    },
  },
};
