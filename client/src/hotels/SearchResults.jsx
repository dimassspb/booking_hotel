import queryString from "query-string";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { searchRes } from "../actions/hotel";
import SmallCard from "../components/cards/SmallCard";
import Search from "./../components/forms/Search";
import Loader from "../components/Loader";

const SearchResults = ({ history }) => {
    // state
    const [hotels, setHotels] = useState([]);
    const [isLoading, setLoading] = useState();

    useEffect(() => {
        const { location, date, bed } = queryString.parse(
            window.location.search,
        );

        if (location.length > 0 && date.length > 0 && bed.length > 0) {
            setLoading(true);
            searchRes({ location, date, bed }).then((res) => {
                setHotels(res.data);
                setLoading(false);
            });
        } else {
            toast.error("Fill in all fields");
            history.push("/");
        }
    }, [window.location.search]);
    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className='col'>
                        <br />
                        <Search />
                    </div>
                    <div className='container'>
                        {hotels.length > 0 ? (
                            <div className='row'>
                                {hotels.map((hotel) => (
                                    <SmallCard key={hotel._id} hotel={hotel} />
                                ))}
                            </div>
                        ) : (
                            <h2>There are no hotels. Try other options</h2>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

export default SearchResults;
