import {postApi} from './postApi';
import {Post} from './postTypes';


async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

async function getListByUserID(userID: string): Promise<Post[]> {
  const postListByUserID = await postApi.getListByUserID(userID);
  return postListByUserID;
}

export const postService = {
  getList,
  getListByUserID
};