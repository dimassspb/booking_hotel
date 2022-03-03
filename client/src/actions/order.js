import axios from "axios";

export const createOrder = async (token, image, hotel) =>
    await axios.post(
        `/api/order-create`,
        { image, hotel },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    export const userOrders = async (token) =>
        await axios.get(`/api/user-orders`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
