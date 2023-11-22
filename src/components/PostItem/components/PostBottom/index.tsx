import React from 'react';

import {Post} from '@domain';
import {Box, Text} from '@components';

type Props = Pick<Post, 'author' | 'title' | 'description' | 'commentCount'>;

export function PostBottom({author, title, description, commentCount}: Props) {
  const commentText = getCommentText(commentCount);

  return (
    <Box mt="s16">
      <Text preset="paragraphMedium" bold>
        {title}
      </Text>
      <Text preset="paragraphMedium" color="gray1">
        {description}
      </Text>
      {commentText && (
        <Text mt="s8" preset="paragraphSmall" bold color="primary">
          {commentText}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}