#!/usr/bin/env zx

const repositoryDirName = "mephi-www";
const containerName = "mephi-site";

try {
  await $`ls | grep ${repositoryDirName}`;
} catch {
  await $`git clone https://github.com/mephistorine/www ${repositoryDirName}`;
}

cd(`/${repositoryDirName}`);

await $`docker stop ${containerName}`;
await $`docker build -t ${containerName} .`;
await $`docker run -d -p 80:80 -p 443:443 -t ${containerName}`;
