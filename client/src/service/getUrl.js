export const getUrl = () => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_API;
    } else {
        return "/api"
    }
};
