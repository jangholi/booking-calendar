import Axios from 'axios';

/**
 * HTTP Client
 */
export class HttpClient {
    /**
     * set base url
     * @param baseURL {string} base url
     */
    constructor(baseURL = process.env.REACT_APP_BASE_URL) {
        this._baseURL = baseURL;
    }

    /**
     * make a request by axios
     * @param method {string} ['POST'|'GET'|'PUT'|'PATCH'|'DELETE']
     * @param url {string}
     * @param data {object}
     * @param params {object}
     * @returns {Promise<AxiosResponse<any>>}
     */
    request(method, url, data, params) {
        let token = null;

        return Axios.request({
            baseURL: this._baseURL,
            method,
            url,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                "Set-Cookie": "HttpOnly;Secure;SameSite=Strict",
                ...(token && {'Authorization': `Bearer ${token}`})
            },
            data: data,
            params
        });
    }
}

export default HttpClient;