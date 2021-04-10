FROM node:12.18.1

RUN mkdir -p /opt/app

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV


WORKDIR /opt
COPY package.json package-lock.json* *.lock ./
# RUN npm rebuild node-sass --force
RUN yarn add typescript @types/react @types/node
RUN yarn install
ENV PATH /opt/node_modules/.bin:$PATH


# copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY . /opt/app
RUN yarn run build

EXPOSE 3000
CMD [ "npm", "start"]
