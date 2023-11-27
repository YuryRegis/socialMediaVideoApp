import {create} from 'zustand';
import {Post, PostComment, postService} from '@domain';


const resetTypes = {
    postList: 'postList',
    postComments: 'postComments',
};

type addCommentToPostType = {
    text: string,
    postID: string,
    author: { id: string, profileURL: string, username: string },
};


type Action = {
    likePost: (postId: string) => void,
    getPostList: (page: number) => void,
    addToPostList: (newPost: Post) => void,
    favoritePoste: (postId: string) => void,
    removeComment: (commentID: string) => void,
    addCommentToPost: ({text, postID, author }: addCommentToPostType) => void,
    resetState: (name: keyof typeof resetTypes) => void,
    getPostComments: ({postId, page}: {postId: string, page: number}) => void,
};

interface IPostList {
    postList: Post[];
    nextPage: boolean,
    isLoading: boolean,
    postComments: PostComment[];
};


export const usePostListStore = create<IPostList & Action>( (set) => ({
    postList: [],
    postComments: [],

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

    getPostComments: async ({postId, page}) => {
        set( () => ({ postComments: [] }) );
        set( () => ({ isLoading: true }) );
        const {list, nextPage} = await postService.getPostComments({postId, page});
        set( ({postComments}) => ({ postComments: [...postComments, ...list] }) );
        set( () => ({ nextPage: Boolean(nextPage) }) );
        set( () => ({ isLoading: false }) );
    },

    addCommentToPost: async({text, postID, author}) => {
        const response = await postService.addCommentToPost({text, postID, author});
        set ( ({postComments}) => ({
            postComments: [response, ...postComments]
        }) );
    },

    removeComment: (commentID) => set( 
        (state) => ({ postComments: state.postComments.filter( 
            (comment) => comment.id !== commentID 
        ) }) 
    ),

    favoritePoste: async (postId) => {
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

    resetState: (name) => {
        switch(name) {
            case resetTypes.postList:
                set( () => ({ postList: [] }) );
                break;
            case resetTypes.postComments:
                set( () => ({ postComments: [] }) );
                break;
        }
    },
    
    addToPostList: (newPost) => set( (state) => ({ postList: [newPost, ...state.postList] }) ),
}));
