import "dotenv/config";
import app from "./app.js";
import { connectRedis } from "./redis/redis.js";
import { postgres } from "./db/postgres.js";
const PORT = process.env.PORT || 5000;


async function StartServer() {

    // Connect to Postgres
    await postgres.connect();
    await postgres.query("SELECT 1");

    console.log("PostgreSQL connected");



    // Connect to Redis
    await connectRedis();

    // Start the Express server
    app.listen(PORT, () => {
        console.log(`API running on port ${PORT}`);
    });

}

StartServer();
