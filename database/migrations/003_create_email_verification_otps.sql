CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE email_verification_otps (
    id BIGSERIAL PRIMARY KEY,

    user_id UUID NOT NULL,

    otp_hash TEXT NOT NULL,

    purpose VARCHAR(50) Not NULL,
    
    expires_at TIMESTAMPTZ NOT NULL,

    attempts INTEGER NOT NULL DEFAULT 0,

    used_at TIMESTAMPTZ NULL,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT fk_email_verification_otps_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);