import React from 'react';

import {Post} from '@domain';
import {Box} from '@components';

import {PostImage} from './components/PostImage';
import {PostHeader} from './components/PostHeader';

interface IPostItemProps {
  post: Post;
}


export function PostItem({post}: IPostItemProps) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
    </Box>
  );
}
