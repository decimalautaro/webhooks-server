import express from "express";
import { envs } from "./config";
import { GithubController } from "./presentation/github/controller";
import { GithubSha256Middleware } from "./presentation/middlewares/middleware-sha256.middleware";

(() => {
  main();
})();

function main() {
  const app = express();

  const controller = new GithubController();

  app.use(express.json());
  app.use(GithubSha256Middleware.verifySignature);

  app.post("/api/github", controller.webHookHandler);

  app.listen(envs.PORT, () => {
    console.log(`App running on port ${envs.PORT}`);
  });
}
