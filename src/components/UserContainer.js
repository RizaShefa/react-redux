import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers1 } from '../redux';

export const UserContainer = ({ userData, fetchUsers1 }) => {
  useEffect(() => {
    fetchUsers1();
  }, [fetchUsers1]);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      {userData && userData.users && userData.users.map(user => {
        // Destructure user properties
        const { id, email, posts } = user;

        return (
          <div key={id}>
            <p>{email}</p>
            <h3>Posts:</h3>
            <ul>
              {posts && posts.map(post => {
                // Destructure post properties
                const { id: postId, title, body, comments } = post;

                return (
                  <li key={postId}>
                    <strong>{title}</strong>
                    <p>{body}</p>
                    <h4>Comments:</h4>
                    <ul>
                      
                      {comments && comments.map(comment => {

                        return (
                          
                          <li key={comment.id}>
                            <strong>{comment.name}</strong>
                            <p>{comment.body}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers1: () => dispatch(fetchUsers1()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
