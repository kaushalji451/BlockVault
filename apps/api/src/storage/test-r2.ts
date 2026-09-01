import { PutObjectCommand } from "@aws-sdk/client-s3";

import { r2, R2_BUCKET } from "./r2.js";

export async function testR2() {
    await r2.send(new PutObjectCommand({
        Bucket: R2_BUCKET,
        Key: "test.txt",
        Body: "Hello from distributed storage",
    })
    )

    console.log("R2 upload successful");
}

testR2().catch((err) => {
    console.error("R2 upload failed", err);
    process.exit(1);
})