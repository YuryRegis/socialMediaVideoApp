import React, {useEffect, useState} from "react";

import {Screen, Text} from "@components";
import {Post, postService} from "@domain";


export function HomeScreen() {
    const [postList, setPostList] = useState<Post[]>([]);
    useEffect(() => {
      postService.getList().then(list => setPostList(list));
    }, []);  

    return (
        <Screen>
            <Text mb='s16' preset="headingLarge">HOME SCREEN</Text>
            {postList.map(post => (
                <Text>{post.title}</Text>
            ))}
        </Screen>
    );
}
