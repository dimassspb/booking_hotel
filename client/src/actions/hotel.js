import axios from "axios";

export const createHotel = async (token, data) =>
    await axios.post(`/api/hotels/create-hotel`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const allHotels = async () =>
    await axios.get(`/api/allhotels`);

export const sellerHotels = async (token) =>
    await axios.get(`/api/seller-hotels`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const deleteHotel = async (token, hotelId) =>
    await axios.delete(`/api/delete-hotel/${hotelId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const show = async (hotelId) =>
    await axios.get(`/api/hotel/${hotelId}`);

export const refreshHotel = async (token, data, hotelId) =>
    await axios.put(
        `/api/refresh-hotel/${hotelId}`,
        data,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

export const isAlreadyBooked = async (token, hotelId) =>
    await axios.get(
        `/api/is-already-booked/${hotelId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

export const searchRes = async (query) =>
    await axios.post(`/api/search-res`, query);
