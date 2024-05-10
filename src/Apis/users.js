import { callPostApi, callDeleteApi,callGetApi,callPutApi } from ".";


// Get user list api function
export async function userListApi(data) {
    try {
        const response = await callPostApi({ url: "user/get/list", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}


// Delete user data by id api function
export async function userDeleteApi(id) {
    try {
        const response = await callDeleteApi({ url: `users/delete/${id}` });
        return response;
    } catch (error) {
        throw error;
    }
}

// Get user data by id api function
export async function userByIdApi(id) {
    try {
        const response = await callGetApi({ url: `users/get/${id}` });
        return response;
    } catch (error) {
        throw error;
    }
}

// Add user api function
export async function addUserApi(data) {
    try {
        const response = await callPostApi({ url: "/user/add", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

// Update user api function
export async function UpdateUserApi(data) {
    try {
        const response = await callPutApi({ url: "users/update", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

// Sign in api function
export async function signInApi(data) {
    try {
        const response = await callPostApi({ url: "user/sign_in", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

// Forgot password api function
export async function forgotPasswordApi(data) {
    try {
        const response = await callPostApi({ url: "user/forgot_password", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}

// Otp verification api function
export async function checkOtpApi(data) {
    try {
        const response = await callPostApi({ url: "user/otp_verification", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}


// Reset Password api function
export async function resetPasswordApi(data, id) {
    try {
        const response = await callPutApi({ url: `user/reset_password/${id}`, body: data });
        return response;
    } catch (error) {
        throw error;
    }
}


// Sign up api function
export async function signUpApi(data) {
    try {
        const response = await callPostApi({ url: "user/sign_up", body: data });
        return response;
    } catch (error) {
        throw error;
    }
}


