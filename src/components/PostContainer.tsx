import React from 'react';
import { IPost } from '../models/IPost';
import { postAPI } from '../services/PostService';
import PostItem from './PostItem';

const PostContainer = () => {
  const { error, isLoading, data:posts } = postAPI.useFetchAllPostsQuery(50);
  const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
  const [deletePost] = postAPI.useDeletePostMutation()
  const [updatePost] = postAPI.useUpdatePostMutation();

  const handleClick = async () => {
    const title = prompt();
    await createPost({
      title, body: title,
    } as IPost)
  };

  const handleRemove = async (post:IPost) => {
    await deletePost(post);
  }

  const handleUpdate = async (post:IPost) => {
    await updatePost(post);
  }

  return (
    <div>
      {isLoading && <h1>...loading</h1>}
      {error && <h1>Loading failed</h1>}
      {posts && posts.map(post => (
        <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />
      ))}
      <button onClick={handleClick}>Add new post</button>
    </div>
  )
};

export default PostContainer;
