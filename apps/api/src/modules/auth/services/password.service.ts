import bycypt from 'bcrypt';

export class PasswordService {

    private static readonly SALT_ROUNDS = 12;

    async hash(password: string): Promise<string> {
        return bycypt.hash(password, PasswordService.SALT_ROUNDS);
    }

    async compare(
        password: string,
        hashedPassword: string
    ): Promise<boolean> {
        return bycypt.compare(password, hashedPassword);
    }
}