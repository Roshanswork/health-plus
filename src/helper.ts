import { showErrorToast } from "./lib/toast";

export const validateEmail = (email: string) => {
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
        showErrorToast("Email is required")
        return false
    }

    if (!emailRegex.test(email)) {
        showErrorToast("Invalid email format")
        return false
    }
    return true
};


export const validatePassword = (password: string) => {
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!password) {
        showErrorToast("Password is required")
        return false
    }

    // if (!passwordRegex.test(password)) {
    //     showErrorToast("Password must be 6+ chars with uppercase, lowercase & number")
    //     return false
    // }
    return true
};
