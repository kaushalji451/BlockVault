import { createClient } from "redis";

// Create a Redis client instance
export const redisClient = createClient({
    url: process.env.REDIS_URL || "redis://localhost:6379",
});

// Handle Redis client errors
redisClient.on("error", (err) => {
    console.error("Redis Client Error", err);
})

// Function to connect to Redis
export async function connectRedis() {
    try {
        await redisClient.connect();
        console.log("Connected to Redis");
    } catch (err) {
        console.error("Could not connect to Redis", err);
    }
}