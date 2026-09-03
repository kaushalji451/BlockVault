export class AppError extends Error {
    statusCode: number;

    constructor(
        messege: string,
        statusCode: number = 400
    ) {
        super(messege);
        this.statusCode = statusCode;
    }
    
}