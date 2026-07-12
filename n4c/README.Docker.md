### Building and Running Your Application

When you're ready, start your application by running:

`docker compose up --build`.

Your application will be available at http://localhost:5670.

### Deploying Your Application to the Cloud

First, build your image, e.g.: `docker build -t myapp .`.

If your cloud uses a different CPU architecture than your development machine (e.g., you are on a Mac M1 and your cloud provider is amd64), you'll want to build the image for that platform:

`docker build --platform=linux/amd64 -t myapp .`

Then push it to your registry, e.g.:

`docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/) documentation for more details on building and pushing images.

### References

- [Docker Node.js Guide](https://docs.docker.com/language/nodejs/)