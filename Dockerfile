FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Generar Prisma Client para ambas bases de datos
RUN npx prisma generate --schema=prisma/db1.schema.prisma
RUN npx prisma generate --schema=prisma/db2.schema.prisma

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
