export const passwordResetOtpTemplate = (otp: string): string => {
    return `
    <h2>BlockVault Forgot Password Verification</h2>

    <p>Your verification code is:</p>

    <h1>${otp}</h1>

    <p>
      This code expires in <strong>5 minutes</strong>.
    </p>

    <p>
      If you didn't request this code,
      you can safely ignore this email.
    </p>
  `;
};