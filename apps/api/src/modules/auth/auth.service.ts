import { UserRepository } from "./repositories/user.repository.js";
import { PasswordService } from "./services/password.service.js";
import { AppError } from "../../shared/errors/AppError.js";

export interface SignupData {
    username: string;
    email: string;
    password: string;
}

export class AuthService {

    private userRepository: UserRepository;
    private passwordService: PasswordService;

    constructor() {
        this.userRepository = new UserRepository();
        this.passwordService = new PasswordService();
    }

    async signup(data: SignupData) {
        // bussiness logic for signup
        const { username, email, password } = data;

        // Step 1: Check if the user already exists
        const existingUser = await this.userRepository.findByEmail(email);

        console.log("Existing user check:", existingUser);

        if (existingUser) {
            throw new AppError(
                "User already exists",
                409
            );
        }

        // Step 2: Hash the password
        const hashedPassword =
            await this.passwordService.hash(password);

        console.log("Password hashed successfully.");

        // Step 3: Create the user
        const user = await this.userRepository.createUser({
            username,
            email,
            password: hashedPassword
        });

        console.log("User created.");

        return {
            message: "signup process started"
        }

    }
}