import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

//  PostAPI  //
export async function callPostApi({ url, body, headers }) {
    try {
        const result = await axios({
            url: url,
            method: "POST",
            data: body,
            timeout: 120000,
        });
        return result;
    } catch (error) {
        // throw error;
        if (error && error.response) {
            return error.response;
        }
    }
}

//  GETAPI  //
export async function callGetApi({ url, body, headers }) {
    try {
        const result = await axios({
            url:  url,
            method: "GET",
            headers: { ...headers, 'ngrok-skip-browser-warning': true },
            data: body,
            timeout: 120000,
        });
        return result;
    } catch (error) {
        // throw error;
        if (error && error.response) {
            return error.response;
        }
    }
}

//  PUTAPI  //
export async function callPutApi({ url, body, headers }) {
    try {
        const result = await axios({
            url:  url,
            method: "PUT",
            headers: { ...headers, 'ngrok-skip-browser-warning': true },
            data: body,
            timeout: 120000,
        });
        return result;
    } catch (error) {
        // throw error;
        if (error && error.response) {
            return error.response;
        }
    }
}

// DELETEAPI //
export async function callDeleteApi({ url, body, headers }) {
    try {
        const result = await axios({
            url:  url,
            method: "DELETE",
            headers: { ...headers, 'ngrok-skip-browser-warning': true },
            data: body,
            timeout: 120000,
        });
        return result;
    } catch (error) {
        // throw error;
        if (error && error.response) {
            return error.response;
        }
    }
}
