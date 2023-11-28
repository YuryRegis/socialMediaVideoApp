import React from 'react';

import {Box} from '../Box';
import {Post} from '@domain';

import {PostImage} from './components/PostImage';
import {PostHeader} from './components/PostHeader';
import {PostBottom} from './components/PostBottom';
import {PostActions} from './components/PostActions';

interface IPostItemProps {
  post: Post;
}


export function PostItem({post}: IPostItemProps) {  
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      
      <PostActions post={post}/>
      
      <PostBottom 
        title={post.title}
        author={post.author}
        description={post.description}
        commentCount={post.commentCount} />
    </Box>
  );
}
