// import { AsyncStorageMMKV } from '@services';
import {postApi} from './postApi';
import {usePostListStore} from '@context';
import {Post, UserPost} from './postTypes';


type getListRespnse = Promise<{list: Post[], nextPage?: number}>;

async function getList(page: number): getListRespnse {
  const response = await postApi.getList(page);
  return {list: response.list, nextPage: response.nextPage};
}

async function getFavoriteList(userID: string): Promise<Post[]> {
  const postFavoriteList = await postApi.getFavoriteList(userID);
  return postFavoriteList;
}

async function getListByUserID(userID: string): Promise<Post[]> {
  const postListByUserID = await postApi.getListByUserID(userID);
  return postListByUserID;
}

async function likeAnPost(postID: string): Promise<Post> {
  const response = await postApi.likeAnPost(postID);
  return response;
}

async function favoritAnPost(postID: string): Promise<Post> {
  const response = await postApi.favoritAnPost(postID);
  return response;
}

async function createPost(post: UserPost): Promise<Post> {
  const newPost = await postApi.createPost(post);
  const {addToPostList} = usePostListStore(state => state);
  addToPostList(newPost);
  return newPost;
}

export const postService = {
  getList,
  likeAnPost,
  favoritAnPost,
  createPost,
  getFavoriteList,
  getListByUserID
};