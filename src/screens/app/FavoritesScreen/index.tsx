import React, { useEffect, useState } from "react";
import {FlatList, ListRenderItemInfo, StyleProp, ViewStyle} from "react-native";

import {Screen} from "@components";
import { ListItem } from "./Components/ListItem";
import {Post, postService, userMock} from "@domain";
import {FavoritesHeader} from "./Components/ProfileHeader";


export function FavoritesScreen() {
    const [favorites, setfavorites] = useState<Post[]>([]);

    useEffect(() => {
        postService.getFavoriteList(userMock.id).then((data) => {
            setfavorites(data);
        });
    }, []);

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return <ListItem post={item} />;
      }

    return (
        <Screen style={$screen}>
            <FlatList
                data={favorites}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={FavoritesHeader}/>
        </Screen>
    );
}

const $screen: StyleProp<ViewStyle> = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
  };
