import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUESTS, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUsersRequests = () => {
    return {
        type: FETCH_USERS_REQUESTS
    }
}

export const fetchUsersSucces = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers1 = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequests());

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                const users = response.data;

                axios.get("https://jsonplaceholder.typicode.com/posts")
                    .then(postsResponse => {
                        const posts = postsResponse.data;

                        axios.get("https://jsonplaceholder.typicode.com/comments")
                            .then(commentsResponse => {
                                const comments = commentsResponse.data;

                                const usersWithDetails = users.map(user => {
                                    user.posts = posts.filter(post => post.userId === user.id);

                                    user.posts = user.posts.map(post => {
                                        post.comments = comments.filter(comment => comment.postId === post.id);
                                        return post;
                                    });

                                    return user;
                                });

                                dispatch(fetchUsersSucces(usersWithDetails));
                            })
                            .catch(commentsError => {
                                const errorMsg = commentsError.message;
                                dispatch(fetchUsersFailure(errorMsg));
                            });

                    })
                    .catch(postsError => {
                        const errorMsg = postsError.message;
                        dispatch(fetchUsersFailure(errorMsg));
                    });

            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchUsersFailure(errorMsg));
            });
    }
}
