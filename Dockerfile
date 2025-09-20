# Dockerfile
FROM node:current-alpine
WORKDIR /app
RUN npm install express body-parser
COPY server.js .
CMD ["node", "server.js"]
