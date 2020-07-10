const baseUrl = "https://simple-blog-api.crew.red/";

type BaseUrlType = typeof baseUrl;

export const API = {
    _get: `${baseUrl as BaseUrlType}posts`,
    _post: `${baseUrl as BaseUrlType}comments`
};
