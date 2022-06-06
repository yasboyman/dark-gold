// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  // rest.post("/login", null),

  // Handles a GET /user request
  rest.get("http://localhost:8000/gold", (req, res, ctx) => {
    return res(
      ctx.text({
        timestamp: 1654518559,
        metal: "XAU",
        currency: "USD",
        exchange: "FOREXCOM",
      })
    );
  }),
];
