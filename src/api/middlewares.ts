import type { MiddlewaresConfig } from "@medusajs/medusa";
import { useAdminUploadFile } from "medusa-react";

import type {
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/medusa";

const storeMiddleware = (
  req: MedusaRequest,
  res: MedusaResponse,
  next: MedusaNextFunction
) => {
  console.log({ req });
  console.log({ res });

  next();
};

export const config: MiddlewaresConfig = {
  routes: [
    {
      matcher: "/admin/uploads",
      middlewares: [storeMiddleware],
    },
  ],
};
