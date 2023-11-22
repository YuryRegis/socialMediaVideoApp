import React from 'react';

import {Post} from '@domain';
import {Box} from '@components';

import {PostImage} from './components/PostImage';
import {PostHeader} from './components/PostHeader';
import { PostActions } from './components/PostActions';

interface IPostItemProps {
  post: Post;
}


export function PostItem({post}: IPostItemProps) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
        reactionCount={post.reactionCount}
      />
    </Box>
  );
}
