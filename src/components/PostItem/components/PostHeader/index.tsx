import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';
import {Box} from '../../../Box';
import {Text} from '../../../Text';

type PostHeaderProps = Pick<Post, 'author'>;


export function PostHeader({author}: PostHeaderProps) {
  return (
    <Box flexDirection="row" alignItems="center" mb="s16">
      <Image
        source={{uri: author.profileURL}}
        style={{width: 32, height: 32, borderRadius: 14}}
      />
      <Text ml="s12" semiBold preset="paragraphMedium">
        {`@${author.userName}`}
      </Text>
    </Box>
  );
}
