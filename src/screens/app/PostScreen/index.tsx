import React from "react";
import {StyleProp, ViewStyle, StatusBar} from "react-native";

import {Screen} from "@components";
import {useAppSafeArea} from "@hooks";
import {AppScreenProps} from '@routes';
import {CommentList} from './components/CommentList';




export function PostScreen({route}: AppScreenProps<'PostScreen'>) {
    const {defaultTop} = useAppSafeArea();
    const {post} = route.params;
    
    return (
        <Screen style={[$screen, {marginTop: - (defaultTop+24)}]}>
            <StatusBar translucent backgroundColor="transparent" barStyle={"dark-content"}/>

            <CommentList post={post} />           
        </Screen>
    );
};

const $screen: StyleProp<ViewStyle> = {
    top: 0,
    paddingBottom: 0,
    paddingHorizontal: 0,
};
