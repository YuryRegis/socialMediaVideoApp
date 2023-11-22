import {Post} from './postTypes';
import {postListMock} from './postListMock';

async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  return postListMock;
}

export const postApi = {
  getList,
};