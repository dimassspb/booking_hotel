import axios from "axios";
import { getUrl } from "../service/getUrl";

const url = getUrl();

export const createOrder = async (token, image, hotel) =>
    await axios.post(
        `${url}/order-create`,
        { image, hotel },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );

    export const userOrders = async (token) =>
        await axios.get(`${url}/user-orders`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
