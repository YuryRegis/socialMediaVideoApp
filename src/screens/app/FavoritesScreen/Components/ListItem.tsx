import React from "react";
import {Image, Dimensions} from "react-native";

import {Post} from "@domain";
import {stringUtils} from "@utils";
import {useFavoriteListStore} from "@context";
import {PostImage, Box, Text, TouchableOpacityBox, Icon} from "@components";


const {width} = Dimensions.get('window');
const $MaxWidth = width - 130;
interface IListItem {
    post: Post;
  }

export function ListItem({post}: IListItem) {
  const {removeFromFavoriteList} = useFavoriteListStore(state => state);

  function handleRemoveFromFavoriteList() {
    removeFromFavoriteList(post.id);
  };

  return (
    <Box  paddingHorizontal="s24" marginBottom="s24">
      
      <Box flexDirection="row" alignItems="center" mb="s8">
        
        <Image
          source={{uri: stringUtils.getUriOrDefaultUser(post.author.profileURL)}}
          style={{width: 50, height: 50, borderRadius: 14}}
        />

        <Box width={$MaxWidth}>
          <Text ml="s12" semiBold preset="paragraphCaptionSmall">
            {`@${post.author.userName}`}
          </Text>

          <Text ml="s12" italic preset="paragraphMedium">
            {stringUtils.truncateName(post.title, 70)}
          </Text>
        </Box>

        <TouchableOpacityBox onPress={handleRemoveFromFavoriteList} pl="s12">
          <Icon color="carrotSecondary" name="bookmarkFill" size={24}/>
        </TouchableOpacityBox>

      </Box>
    
      <TouchableOpacityBox>
        <PostImage imageURL={post.imageURL} />
      </TouchableOpacityBox>

    </Box>
  );
};
