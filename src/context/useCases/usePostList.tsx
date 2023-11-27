import {create} from 'zustand';

import {Post} from '@domain';
import {postService} from '@domain';


type Action = {
    resetState: () => void,
    getPostList: (page: number) => void,
    addToPostList: (newPost: Post) => void,
    likePost: (postId: string) => void,
    favoirtePost: (postId: string) => void,
};

interface IPostList {
    postList: Post[];
    nextPage: boolean,
    isLoading: boolean,
};


export const usePostListStore = create<IPostList & Action>( (set) => ({
    postList: [],
    nextPage: true,
    isLoading: false,

    getPostList: async (page) => {
        set( () => ({ isLoading: true }) );
        const response = await postService.getList(page);
        set( (state) => ({postList: [...state.postList, ...response.list]}) ); 
        set( () => ({ nextPage: Boolean(response.nextPage) }) );
        set( () => ({ isLoading: false }) );
    },

    likePost: async (postId) => {
        const response = await postService.likeAnPost(postId);
        set( (state) => ({
            postList: state.postList.map( (post) => {
                if(post.id === postId) {
                    post.isLiked = response.isLiked;
                    post.reactionCount = response.reactionCount;
                }
                return post;
            })
        }) );
    },

    favoirtePost: async (postId) => {
        const response = await postService.favoritAnPost(postId);
        set( (state) => ({
            postList: state.postList.map( (post) => {
                if(post.id === postId) {
                    post.isFavorited = response.isFavorited;
                    post.favoriteCount = response.favoriteCount;
                }
                return post;
            })
        }) );
    },

    resetState: () => set( () => ({postList: []}) ),
    addToPostList: (newPost) => set( (state) => ({ postList: [newPost, ...state.postList] }) ),
}));
