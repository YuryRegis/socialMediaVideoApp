import React from 'react';
import { Image, Dimensions } from 'react-native';

import { PostComment } from '@domain';
import { useAuth, usePostListStore } from '@context';
import {Box, Text, Icon, TouchableOpacityBox} from '@components';


const {width} = Dimensions.get('window');
const $maxWdith = width - 112;

interface IRenderItemList {
    item: PostComment;
};

export function RenderItemList({ item }: IRenderItemList) {
    const {authData} = useAuth();
    const {removeComment} = usePostListStore();

    function handleDeleteComment() {
        removeComment(item.id);
    }

    return (

        <Box paddingHorizontal='s24' 
            alignItems='center' 
            justifyContent='space-between' 
            flexDirection='row'>
            
            <Box alignItems='center' flexDirection='row'>
                <Image source={{uri: item.author.profileURL}} 
                    style={{width: 40, height: 40, borderRadius: 14}}
                />

                <Box maxWidth={$maxWdith} paddingLeft='s12'>
                    <Text semiBold preset="paragraphCaptionSmall">
                        {`@${item.author.username}`}
                    </Text>

                    <Text italic preset="paragraphMedium">
                        {item.text}
                    </Text>
                </Box>
            </Box>

            {(authData?.user.id === item.author.id) && (
                <TouchableOpacityBox onPress={handleDeleteComment}>
                    <Icon color="gray3" name='trash' size={24}/>
                </TouchableOpacityBox>
            )}

        </Box>
    );
};
