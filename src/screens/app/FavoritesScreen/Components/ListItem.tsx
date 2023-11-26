import React from "react";
import {Image} from "react-native";

import { Post } from "@domain";
import {stringUtils} from "@utils";
import {PostImage, Box, Text, TouchableOpacityBox} from "@components";


interface IListItem {
    post: Post;
  }

export function ListItem({post}: IListItem) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      
      <Box flexDirection="row" alignItems="center" mb="s8">
        
        <Image
          source={{uri: stringUtils.getUriOrDefaultUser(post.author.profileURL)}}
          style={{width: 40, height: 40, borderRadius: 14}}
        />

        <Box>
          <Text ml="s12" semiBold preset="paragraphCaptionSmall">
            {`@${post.author.userName}`}
          </Text>

          <Text ml="s12" italic preset="paragraphMedium">
            {stringUtils.truncateName(post.title, 45)}
          </Text>
        </Box>

      </Box>
    
      <TouchableOpacityBox>
        <PostImage imageURL={post.imageURL} />
      </TouchableOpacityBox>

    </Box>
  );
};
