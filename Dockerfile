FROM node:16.14.2-bullseye-slim@sha256:d54981fe891c9e3442ea05cb668bc8a2a3ee38609ecce52c7b5a609fadc6f64b

ENV NODE_ENV=production

RUN addgroup --gid 1017 --system appgroup \
  && adduser --uid 1017 --system appuser --gid 1017

WORKDIR /app

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y make python3

COPY . .

RUN npm install

RUN chown -R appuser:appgroup /app

USER 1017

RUN chmod +x start.sh

CMD ["./start.sh"]