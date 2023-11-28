import React, { useEffect, useState } from 'react';
import {FlatList, ListRenderItemInfo, RefreshControl} from 'react-native';

import {PostComment, Post} from '@domain';
import {usePostListStore} from '@context';
import {RenderItemList} from './RenderItemList';
import {Box, FooterListComponent} from '@components';
import {ComentHeaderList} from './ComentHeaderList';


interface ICommentList { post: Post; };

export function CommentList({post}: ICommentList) {
    const [page, setPage] = useState(1);
    const {postComments, isLoading, nextPage, resetState, getPostList, getPostComments} = usePostListStore();
    
    useEffect(() => {
        getPostComments({postId: post.id, page});
    }, []);  

    function getMoreData() {
        if(nextPage) {
            getPostComments({postId: post.id, page});
            setPage(page + 1);
        }
    };

    function refreshHandler() {
        setPage(2);
        resetState("postComments");
        getPostList(1);
    };

    function renderItem({item}: ListRenderItemInfo<PostComment>) {
        return <RenderItemList item={item} />;
    }
    
    function renderHeader() {
        return <ComentHeaderList post={post} />;
    }
    
    return (
        <FlatList
            data={postComments}
            renderItem={renderItem}
            onEndReached={getMoreData}
            onEndReachedThreshold={0.1}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={Separator}
            keyExtractor={comment => comment.id}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => FooterListComponent({isLoading})}
            refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={refreshHandler} />
            }
        />
    );
};

function Separator() {
    return (
        <Box paddingHorizontal='s16' paddingVertical='s14'>
            <Box 
                borderTopWidth={1}
                borderColor='gray4'/>
        </Box>
    );
}