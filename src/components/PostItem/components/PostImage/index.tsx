import React from 'react';
import {Dimensions, Image} from 'react-native';

import {Post} from '@domain';

 
type PostImageProps = Pick<Post, 'imageURL'>;

export function PostImage({imageURL}: PostImageProps) {
  return (
    <Image
      source={{uri: imageURL}}
      resizeMode="cover"
      style={{
        width: Dimensions.get('screen').width,
        marginHorizontal: -24,
        height: 300,
      }}
    />
  );
}
