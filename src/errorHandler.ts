import { ErrorHandler } from "hono";
import { HTTPException } from "hono/http-exception";

const errorHandler: ErrorHandler = (err, _) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  const response = new Response(err.message, { status: 500 });
  return response;
};

export default errorHandler;
