FROM node:14.20.0-alpine3.15

ARG STAG
ENV STAG ${STAG}

RUN echo ${STAG}

RUN apk add --no-cache curl jq python3 py-pip make

WORKDIR /src/client/app

RUN apk add --no-cache git

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "deploy"]
