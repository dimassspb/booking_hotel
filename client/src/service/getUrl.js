export const getUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return process.env.REACT_APP_API;
    } else {
        return "/api"
    }
};
