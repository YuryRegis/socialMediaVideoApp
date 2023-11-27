import React from 'react';

import {Post} from '@domain';
import {Box, TouchableOpacityBox, Icon, IconProps, Text} from '@components';
import { usePostListStore } from '@context';


export function PostActions({post}: {post: Post}) {
  const {id, reactionCount, commentCount, favoriteCount, isFavorited} = post;
  const {likePost, favoirtePost} = usePostListStore();

  function likePostHandler() {
    likePost(id);
  }

  function navigateToComments() {
    //TODO: Implement navigate to comments
  }

  function favoritePost() {
    favoirtePost(id);
  }
  return (
    <Box flexDirection="row" mt="s16">
      <Item
        marked={post.isLiked}
        onPress={likePostHandler}
        text={reactionCount}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
      />
      <Item
        marked={(commentCount > 0)}
        onPress={navigateToComments}
        text={commentCount}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
      />
      <Item
        marked={isFavorited}
        onPress={favoritePost}
        text={favoriteCount}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked: boolean;
  text: number;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
}

function Item({onPress, icon, marked, text}: ItemProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        color={marked ? 'carrotSecondary' : undefined}
        name={marked ? icon.marked : icon.default}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
