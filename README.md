How to reproduce:

```bash
git clone git@github.com:elderapo/pulumi-docker-bug.git
cd pulumi-docker-bug/

./setup-db-directory.sh
docker-compose up -d

# wait for db to startup

yarn install
yarn --cwd packages/deployer deploy
```

Output:

```bash
Diagnostics:
  docker:index:Image (someimage4):
    error: unable to hash build context: error while hashing "db/ca-key.pem": could not open file /tmp/pulumi-docker-bug/db/ca-key.pem: open /tmp/pulumi-docker-bug/db/ca-key.pem: permission denied
```
