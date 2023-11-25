import {Post} from './postTypes';
import {postListMock, postListByIdMock} from './postListMock';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  return postListMock;
}

async function getListByUserID(userID: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(`${userID}`), 1500));
  return postListByIdMock;
}

export const postApi = {
  getListByUserID,
  getList
};