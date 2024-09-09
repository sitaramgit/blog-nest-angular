import { apiEndPoints } from "./apiEndPoints";

export const API_REQUESTS = {
    USER_REGISTER: {
        METHOD: 'POST',
        URL: apiEndPoints.auth.register,
        PAYLOAD: {}
    },
    USER_LOGIN: {
        METHOD: 'POST',
        URL: apiEndPoints.auth.login,
        PAYLOAD: {}
    },
    SOCIAL_LOGIN: {
        METHOD: 'POST',
        URL: apiEndPoints.auth.socialLogin,
        PAYLOAD: {}
    },
    GET_ALL_POSTS: {
        METHOD: 'GET', 
        URL: apiEndPoints.posts.allPosts,
        PAYLOAD: {}
    },
    GET_POST_DETAILS: {
        METHOD: 'GET', 
        URL: apiEndPoints.posts.postDetails,
        PAYLOAD: {},
        API_PARAMS: {
            postId: '' 
        }
    }
}