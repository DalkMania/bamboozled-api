/**
 * @type {import('fastify').FastifySchema}
 */
export const getAnswer = {
  response: {
    200: {
      type: "object",
      properties: {
        id: { type: "string" },
        answer: { type: "string" },
      },
    },
  },
};
