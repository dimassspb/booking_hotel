import axios from "axios";
import { getUrl } from "../service/getUrl";

const url = getUrl()

export const createHotel = async (token, data) =>
    await axios.post(`${url}/create-hotel`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const allHotels = async () => await axios.get(`${url}/allhotels`);

export const sellerHotels = async (token) =>
    await axios.get(`${url}/seller-hotels`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const deleteHotel = async (token, hotelId) =>
    await axios.delete(`${url}/delete-hotel/${hotelId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const show = async (hotelId) => await axios.get(`${url}/hotel/${hotelId}`);

export const refreshHotel = async (token, data, hotelId) =>
    await axios.put(`${url}/refresh-hotel/${hotelId}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const isAlreadyBooked = async (token, hotelId) =>
    await axios.get(`${url}/is-already-booked/${hotelId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const searchRes = async (query) => await axios.post(`${url}/search-res`, query);
