import React, {useEffect, useState} from "react";
import {Dimensions, FlatList, Image, ListRenderItemInfo} from "react-native";

import {Screen, TouchableOpacityBox} from "@components";
import {Post, userMock, postService} from "@domain";
import {ListHeader} from "./Components/ListHeader";

const {width} = Dimensions.get('window');
const ITEM_SIZE = width / 3;

export function ProfileScreen() {
    const [postList, setPostList] = useState<Post[]>([]);

    useEffect(() => {
        postService.getListByUserID(userMock.id)
            .then(list => {
                setPostList(list);
            });
    }, []);

    function renderItem({item}: ListRenderItemInfo<Post>) {
        return (
            <TouchableOpacityBox>
                <Image
                    source={{uri: item.imageURL}}
                    style={{
                        width: ITEM_SIZE,
                        height: ITEM_SIZE, 
                    }}/>
            </TouchableOpacityBox>
        );
    };

    return (
        <Screen style={$screen}>

           <FlatList
            numColumns={3} 
            data={postList}
            renderItem={renderItem}
            keyExtractor={post => post.id}
            ListHeaderComponent={ListHeader({user: userMock})}
            showsVerticalScrollIndicator={false}
           />

        </Screen>
    );
}

const $screen = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
};
