import {userMock} from '../User/userMock';
import {commentsMock} from './commentsMock';
import {Post, PostComment, UserPost} from './postTypes';
import {postListMock, postListByIdMock} from './postListMock';


async function getList(page: number): Promise<{list: Post[], nextPage?: number}> {
  const offset = page * 5;
  const initial = (page - 1) * 5;
  const nextPage = offset <= postListMock.length ? page + 1 : undefined;
  
  await new Promise(resolve => setTimeout(() => resolve(''), 1500));
  return {list: postListMock.slice(initial, offset), nextPage: nextPage};
}

type getFavoriteListProps = {userID: string, page: number};
async function getFavoriteList({page, userID}: getFavoriteListProps) {
  const offset = page * 5;
  const initial = (page - 1) * 5;
  const nextPage = offset <= postListMock.length ? page + 1 : undefined;

  await new Promise(resolve => setTimeout(() => resolve(`${userID}`), 1500));
  return {list: postListByIdMock.slice(initial, offset), nextPage: nextPage};
}

async function getListByUserID(userID: string): Promise<Post[]> {
  await new Promise(resolve => setTimeout(() => resolve(`${userID}`), 1500));
  return postListByIdMock;
}

type getPostCommentsProps = {postId: string, page: number};
async function getPostComments({page, postId}: getPostCommentsProps) {
  const offset = page * 5;
  const initial = (page - 1) * 5;
  const nextPage = offset <= postListMock.length ? page + 1 : undefined;

  await new Promise(resolve => setTimeout(() => resolve(`${postId}`), 300));
  return {list: commentsMock.slice(initial, offset), nextPage: nextPage};
}

type addCommentToPostProps = {
  text: string, 
  postID: string, 
  author: { id: string, profileURL: string, username: string }
};
async function addCommentToPost({postID, text, author}: addCommentToPostProps): Promise<PostComment> {
  const comment = await new Promise<PostComment>(resolve => setTimeout(() => resolve(({
    id: Math.random().toString(),
    text,
    author: {
      id: author.id,
      profileURL: author.profileURL,
      username: author.username
    },
  })), 500));
  return comment;
};

async function likeAnPost(postID: string): Promise<Post> {
  const post = postListMock.find(post => post.id === postID);
  if (!post) throw new Error('Post not found');
  post.isLiked = !post.isLiked;
  post.reactionCount += post.isLiked ? 1 : -1;
  return post;
}

async function favoritAnPost(postID: string): Promise<Post> {
  const post = postListMock.find(post => post.id === postID);
  if (!post) throw new Error('Post not found');
  post.isFavorited = !post.isFavorited;
  post.favoriteCount += post.favoriteCount ? 1 : -1;
  return post;
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
    isLiked: false,
    isFavorited: false
  })), 500));
  return _post;
}

export const postApi = {
  getFavoriteList,
  addCommentToPost,
  getPostComments,
  getListByUserID,
  favoritAnPost,
  createPost,
  likeAnPost,
  getList
};