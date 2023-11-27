import {create} from 'zustand';
import {Post, postService} from '@domain';


type Action = {
    resetState: () => void,
    addTofavoritList: (newPost: Post) => void,
    removeFromFavoriteList: (postID: string) => void,
    getFavoritList: ({userID, page}: {userID: string, page: number}) => void,
};

interface IFavoritList {
    favoritList: Post[];
    nextPage: boolean,
    isLoading: boolean,
};


export const useFavoriteListStore = create<IFavoritList & Action>( (set) => ({
    nextPage: true,
    favoritList: [],
    isLoading: false,
    
    resetState: () => set( () => ({favoritList: []}) ),

    getFavoritList: async ({userID, page}) => {
        set( () => ({ isLoading: true }) );
        const response = await postService.getFavoriteList({userID, page});
        set( (state) => ({favoritList: [...state.favoritList, ...response.list]}) ); 
        set( () => ({ nextPage: Boolean(response.nextPage) }) );
        set( () => ({ isLoading: false }) );
    },

    
    removeFromFavoriteList: (postID) => set( 
        (state) => ({ favoritList: state.favoritList.filter( 
            (post) => post.id !== postID 
        ) }) 
    ),

    addTofavoritList: (newPost) => set( (state) => ({ 
        favoritList: [newPost, ...state.favoritList] 
    }) ),
}));
