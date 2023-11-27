import React, {useEffect, useState} from "react";
import {FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle} from 'react-native';

import {Post} from "@domain";
import {usePostListStore} from "@context";
import {Screen, Box, PostItem, FooterListComponent} from "@components";
import {HomeHeader} from "./Components/HomeHeader";


export function HomeScreen() {
    const [page, setPage] = useState(1);
    const {getPostList, nextPage, postList, isLoading, resetState} = usePostListStore();

    useEffect(() => {
      getMoreData()
    }, []);  

    function renderItem({item}: ListRenderItemInfo<Post>) {
      return <PostItem post={item} />;
    }

    function getMoreData() {
      if(isLoading) return;
      if(nextPage) {
        getPostList(page);
        setPage(page + 1);
      }
    };

    function refreshHandler() {
      setPage(2);
      resetState();
      getPostList(1);
    }

    return (
        <Screen style={$screen}>
            <FlatList
                data={postList}
                renderItem={renderItem}
                keyExtractor={post => post.id}
                onEndReached={getMoreData}
                onEndReachedThreshold={0.1}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={HomeHeader}
                ListFooterComponent={
                  FooterListComponent({postList, isLoading})
                }
                refreshControl={
                  <RefreshControl refreshing={isLoading} onRefresh={refreshHandler} />
                }
            />
        </Screen>
    );
}

const $screen: StyleProp<ViewStyle> = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
