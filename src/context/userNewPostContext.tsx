import React, { PropsWithChildren, createContext, useState } from 'react';
import {UserPost} from '@domain';


export interface IUserNewPostContextData {
    newPost: UserPost;
    updateNewPost: (newPost: UserPost) => void;
    resetUserPost: () => void;
}

export const UserNewPostContext = createContext<IUserNewPostContextData>({} as IUserNewPostContextData);

const initialUserPost: UserPost = {
    title: '',
    imageURL: '',
    description: '',
};

export function UserNewPostProvider({ children }: PropsWithChildren) {
    const [newPost, setNewPost] = useState<UserPost>(initialUserPost);

    function updateNewPost(newPost: UserPost) {
        setNewPost(oldState => ({ ...oldState, ...newPost }));
    };

    function resetUserPost() {
        setNewPost(initialUserPost);
    };

    const values = {
        newPost,
        updateNewPost,
        resetUserPost,
    };

    return (
        <UserNewPostContext.Provider value={values}>
            {children}
        </UserNewPostContext.Provider>
    );
};