import * as docker from "@pulumi/docker";
import * as path from "path";

const MONOREPO_ROOT_DIRECTORY = path.join(__dirname, "..", "..", "..");
const DOCKER_ORG = "elderapo";
const IMAGE_NAME = "someimage3";

const image = new docker.Image(IMAGE_NAME, {
  build: {
    context: MONOREPO_ROOT_DIRECTORY,
    dockerfile: path.join(MONOREPO_ROOT_DIRECTORY, "docker", "Dockerfile"),
    target: "api-release",
    args: {
      DOCKER_BUILDKIT: "1",
      DOCKER_HOST: process.env.DOCKER_HOST,
    },
    builderVersion: "BuilderBuildKit",
    platform: "linux/amd64",
  },
  imageName: `docker.io/${DOCKER_ORG}/${IMAGE_NAME}`,
}).imageName;
