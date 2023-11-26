import {useContext} from 'react';
import {UserNewPostContext, IUserNewPostContextData} from '../userNewPostContext';


export function useNewUserPost(): IUserNewPostContextData {
    const context = useContext(UserNewPostContext);
  
    if (!context) {
      throw new Error('useNewUserPost must be used within an UserNewPostProvider');
    }
  
    return context;
}
