export const apiEndPoints = {
    auth: {
        register: '/users/register',
        socialLogin: '/users/socialLogin',
        login: '/users/login'
    },
    posts: {
        allPosts: '/posts',
        postDetails: '/posts/:postId'//concat post id
    },
    host_api: {
        host: 'http://localhost:3200'
    }
}