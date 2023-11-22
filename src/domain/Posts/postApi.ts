import {Post} from './postTypes';
import {postListMock} from './postListMock';

async function getList(): Promise<Post[]> {
  //TODO: simular um delay na API
  return postListMock;
}

export const postApi = {
  getList,
};