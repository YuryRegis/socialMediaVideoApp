import {userMock} from '@domain';
import {Post, UserPost} from './postTypes';
import {postListMock, postListByIdMock} from './postListMock';


async function getList(): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  return postListMock;
}

async function getFavoriteList(userID: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(`${userID}`), 1500));
  return postListMock;
}

async function getListByUserID(userID: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(`${userID}`), 1500));
  return postListByIdMock;
}

async function createPost(post: UserPost): Promise<Post> {
  const _post = await new Promise<Post>(resolve => setTimeout(() => resolve(({
    id: Math.random().toString(),
    title: post.title,
    imageURL: post.imageURL,
    description: post.description,
    author: {
      name: userMock.fullName,
      userName: userMock.username,
      profileURL: userMock.profileURL
    },
    commentCount: 0,
    reactionCount: 0,
    favoriteCount: 0,
  })), 500));
  return _post;
}

export const postApi = {
  getFavoriteList,
  getListByUserID,
  createPost,
  getList
};