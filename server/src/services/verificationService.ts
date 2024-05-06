/**
 * Verify the digits
 * 
 * @param {string} code 
 * @returns {Object} { error: boolean, message: string }
 */
export const verifyCode = async (code: string): Promise<{ error: boolean, message: string }> => {
    try {
        if (code.length !== 6) {
            return { error: true, message: "Code is not equal to 6 digits." };
        }
        if (code.charAt(5) === '7') {
            return { error: true, message: "Last digit of code is 7." };
        }
        return { error: false, message: "" };
    } catch (error: any) {
        throw new Error(error.message);
    }
}
