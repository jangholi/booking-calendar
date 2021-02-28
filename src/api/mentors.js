/** @API Auth API **/

import HttpClient from "../utils/HttpClient";
const client = new HttpClient();

/**
 * Logout user
 * @returns {Promise<AxiosResponse<*>>}
 */
export const getAllocatedSlots = (userId) => client.request('GET', `mentors/${userId}/agenda`);