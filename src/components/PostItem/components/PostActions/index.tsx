import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Post} from '@domain';
import {usePostListStore, useFavoriteListStore} from '@context';
import {Box, TouchableOpacityBox, Icon, IconProps, Text} from '@components';


export function PostActions({post}: {post: Post}) {
  const {id, reactionCount, commentCount, favoriteCount, isFavorited} = post;
  const {likePost, favoritePoste} = usePostListStore();
  const {addTofavoritList} = useFavoriteListStore();

  const {navigate} = useNavigation();

  function likePostHandler() {
    likePost(id);
  }

  function navigateToComments() {
    navigate('PostScreen', {post});
  }

  function favoritePost() {
    favoritePoste(id);
    addTofavoritList(post);
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
