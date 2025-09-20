# Intro

A simple http server to log headers and bodies of incoming requests. Made to test Webhooks, universally usable.

# Run

## Locally

- Clone the repository
- `npm install`
- `node index.js`

## Docker

### Short term

To run the container only for a session and then have it removed (recommended):

```shell
docker run --rm \
  --name request-logger \
  --pull always \
  -p 3000:3000 \
  ghcr.io/doganm95/request-logger:latest
```

### Long term

To let the container run in the background and attach to its logs on demand:

```shell
docker run --d \
  --name request-logger \
  --pull always \
  -p 3000:3000 \
  --restart unless-stopped
  ghcr.io/doganm95/request-logger:latest
```

Attach using 

```shell
docker logs --follow request-logger
```

# Webhooks

To test webhooks by using this server as the target to receive the requests, just forward the port of the machine this container/app runs on.
For security reasons, only enable the port forwarding rule while needed, else the server may get spammed.
