import React, { useEffect, useState } from "react";
import {FlatList, ListRenderItemInfo, RefreshControl, StyleProp, ViewStyle} from "react-native";

import {Post} from "@domain";
import {ListItem} from "./Components/ListItem";
import {useAuth, useFavoriteListStore} from '@context';
import {Screen, FooterListComponent} from "@components";
import {FavoritesHeader} from "./Components/ProfileHeader";


export function FavoritesScreen() {
    const [page, setPage] = useState(1);
    
    const {authData} = useAuth();
    const favorites = useFavoriteListStore(state => state);
    
    useEffect(() => {
    }, []);

    function getMoreData() {
        if(favorites.isLoading) return;
        if(favorites.nextPage) {
        favorites.getFavoritList({
            userID: authData?.user.id as string, page
        });
        setPage(page + 1);
        }
    };

    function refreshHandler() {
        setPage(2);
        favorites.resetState();
        favorites.getFavoritList({
            userID: authData?.user.id as string, page: 1
        });
    }

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return <ListItem post={item} />;
      }

    return (
        <Screen style={$screen}>
            <FlatList
                renderItem={renderItem}
                onEndReached={getMoreData}
                onEndReachedThreshold={0.1}
                data={favorites.favoritList}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={FavoritesHeader}
                ListFooterComponent={
                  FooterListComponent({isLoading: favorites.isLoading})
                }
                refreshControl={
                    <RefreshControl refreshing={favorites.isLoading} onRefresh={refreshHandler} />
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
