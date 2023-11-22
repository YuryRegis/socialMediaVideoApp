import React, {useEffect, useState} from "react";
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {Post, postService} from "@domain";
import {Screen, PostItem} from "@components";
import {HomeHeader} from "./Components/HomeHeader";

export function HomeScreen() {
    const [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
      postService.getList().then(list => setPostList(list));
    }, []);  

    function renderItem({item}: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
    }

    return (
        <Screen style={$screen}>
            <FlatList
                data={postList}
                renderItem={renderItem}
                keyExtractor={post => post.id}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={HomeHeader}
            />
        </Screen>
    );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
