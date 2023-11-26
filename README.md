
## Getting Started

In the project folder:

```bash
npm install
# 
npx prisma generate
# 
docker compose build
#
docker compose up
```

Open another terminal window and run:
```bash
npx prisma migrate dev --name init
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
