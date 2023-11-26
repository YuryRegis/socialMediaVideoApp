import {create} from 'zustand';
import {UserPost} from '@domain';


type Action = {
    resetState: () => void,

    setTitle: (newTitle: UserPost['title']) => void,
    setImageURL: (newImageURL: UserPost['imageURL']) => void,
    setDescription: (newDescription: UserPost['description']) => void,
}
  
const initialState: UserPost = {
    title: '',
    imageURL: '', 
    description: '',
};

export const useUserPostStore = create<UserPost & Action>( (set) => ({
    ...initialState,
    
    resetState: () => set( () => ({...initialState}) ),

    setTitle: (newTitle: string) => set( () => ({ title: newTitle }) ),
    setImageURL: (newImageURL) => set( () => ({ imageURL: newImageURL }) ),
    setDescription: (newDescription: string) => set( () => ({ description: newDescription }) ),
}));
