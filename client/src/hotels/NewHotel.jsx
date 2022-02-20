import { toast } from "react-toastify";
import { useState } from "react";
import { useSelector } from "react-redux";
import { createHotel } from "./../actions/hotel";
import HotelCreateForm from "../components/forms/HotelCreateForm";
import Loader from "../components/Loader";

const NewHotel = () => {
    // redux
    const { auth } = useSelector((state) => ({ ...state }));
    const { token } = auth;
    console.log("auth", auth);

    // state
    const [values, setValues] = useState({
        title: "",
        content: "",
        location: "",
        image: "",
        price: "",
        from: "",
        to: "",
        bed: "",
    });

    const [preview, setPreview] = useState(
        "https:via.placeholder.com/100x100.png?text=PREVIEW",
    );
    const [loading, setLoading] = useState();

    // destructuring
    const { title, content, location, image, price, from, to, bed } = values;
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(values);

        let hotelData = new FormData();
        hotelData.append("title", title);
        hotelData.append("content", content);
        hotelData.append("location", location);
        hotelData.append("price", price);
        image && hotelData.append("image", image);
        hotelData.append("from", from);
        hotelData.append("to", to);
        hotelData.append("bed", bed);

        console.log("hotelData", [...hotelData]);

        try {
            setLoading(true);
            let res = await createHotel(token, hotelData);
            setLoading(false);
            console.log("HOTEL CREATE RESPONSE", res);
            toast.success("New hotel is create!");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data);
        }
    };

    const handleImageChange = (e) => {
        // console.log(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]));
        setValues({ ...values, image: e.target.files[0] });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className='container-fluid p-5 text-center'>
                <h2>Add hotel</h2>
                {loading ? (
                    <Loader />
                ) : (
                    <div className='row'>
                        <div className='col-md-10'>
                            <br />
                            <HotelCreateForm
                                values={values}
                                setValues={setValues}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                handleImageChange={handleImageChange}
                            />
                        </div>
                        <div className='col-md-2'>
                            <img
                                src={preview}
                                alt='preview_image'
                                className='img img-fluid m-2'
                            />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default NewHotel;
