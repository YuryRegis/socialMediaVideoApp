import {postApi} from './postApi';
import {Post} from './postTypes';


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

export const postService = {
  getList,
  getFavoriteList,
  getListByUserID
};