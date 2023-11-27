// import { AsyncStorageMMKV } from '@services';
import {postApi} from './postApi';
import {usePostListStore} from '@context';
import {Post, UserPost} from './postTypes';


async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

async function getFavoriteList(userID: string): Promise<Post[]> {
  const postFavoriteList = await postApi.getFavoriteList(userID);
  return postFavoriteList;
}

async function getListByUserID(userID: string): Promise<Post[]> {
  const postListByUserID = await postApi.getListByUserID(userID);
  return postListByUserID;
}

async function createPost(post: UserPost): Promise<Post> {
  const newPost = await postApi.createPost(post);
  const {addToPostList} = usePostListStore(state => state);
  addToPostList(newPost);
  return newPost;
}

export const postService = {
  getList,
  createPost,
  getFavoriteList,
  getListByUserID
};