import {create} from 'zustand';
import {Post, postListMock} from '@domain';


type Action = {
    resetState: () => void,
    addToPostList: (newPost: Post) => void,
};

interface IPostList {
    postList: Post[];
};

const initialState: Post[] = postListMock;

export const usePostListStore = create<IPostList & Action>( (set) => ({
    postList: [...initialState],
    
    resetState: () => set( () => ({postList: initialState}) ),
    addToPostList: (newPost) => set( (state) => ({ postList: [newPost, ...state.postList] }) ),
}));
