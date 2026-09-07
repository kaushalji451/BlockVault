import { postgres } from "../../../db/postgres.js";

export interface CreateUserData {
    username: string;
    email: string;
    password: string;
}

export class UserRepository {

    async findByEmail(email: string) {
        console.log("finding by email");
        // logic to find user by email in the database
        const result = await postgres.query(
            `
            SELECT
            id,
            username,
            email,
            password_hash,
            email_verified,
            created_at,
            updated_at
            FROM users
            WHERE email = $1
            LIMIT 1
            `,
            [email]
        );

        return result.rows[0] || null;
    }

    async findById(id: string) {
        // logic to find user by id in the database
        const result = await postgres.query(
            `
            SELECT
                id,
                username,
                email,
                password_hash,
                email_verified,
                created_at,
                updated_at
            FROM users
            WHERE id = $1
            LIMIT 1
            `,
            [id]
        );

        return result.rows[0] || null;
    }

    async createUser(user: CreateUserData) {
        // logic to create a new user in the database
        const result = await postgres.query(
            `
            INSERT INTO users (
                username,
                email,
                password_hash
            )
            VALUES ($1, $2, $3)
            RETURNING
                id,
                username,
                email,
                email_verified,
                created_at
            `,
            [user.username, user.email, user.password]
        )
        return result.rows[0] || null;
    }

    async updateEmailVerified(userId: string) {
        // logic to update the email verified status of a user in the database
        console.log("updating email");
        const result = await postgres.query(
            `
            UPDATE users
            SET 
                email_verified = TRUE,
                updated_at = NOW()
            WHERE id = $1
            RETURNING
                id,
                username,
                email,
                email_verified
            `,
            [userId]
        );
        return result.rows[0] || null;
    }

    async updatePassword(userId: string, hashedPassword: string) {
        // logic to update the email verified status of a user in the database
        console.log("updating new Password");
        const result = await postgres.query(
            `
            UPDATE users
            SET 
                password_hash = $2,
                updated_at = NOW()
            WHERE id = $1
            RETURNING
                id,
                username,
                email
            `,
            [userId, hashedPassword]
        );
        return result.rows[0] || null;
    }
}