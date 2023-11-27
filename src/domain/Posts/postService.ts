// import { AsyncStorageMMKV } from '@services';
import {postApi} from './postApi';
import {Post, UserPost} from './postTypes';


type getListRespnse = Promise<{list: Post[], nextPage?: number}>;
async function getList(page: number): getListRespnse {
  const response = await postApi.getList(page);
  return {list: response.list, nextPage: response.nextPage};
}

type getFavoriteListProps = {userID: string, page: number};
async function getFavoriteList(props: getFavoriteListProps) {
  const response = await postApi.getFavoriteList(props);
  return {list: response.list, nextPage: response.nextPage};
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