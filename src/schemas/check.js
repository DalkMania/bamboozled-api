/**
 * @type {import('fastify').FastifySchema}
 */
export const checkAnswer = {
  body: {
    type: "object",
    properties: {
      answer: {
        type: "string",
      },
    },
    required: ["answer"],
    additionalProperties: false,
  },
  response: {
    200: {
      type: "object",
      properties: {
        text: { type: "string" },
        result: { type: "string" },
      },
    },
  },
};
