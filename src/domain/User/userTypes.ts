export interface User {
    id: string; 
    email: string; 
    lastName: string; 
    username: string; 
    fullName: string; 
    firstName: string; 
    isOnline: boolean; 
    profileURL: string;
    folowersCount: number;
    folowingCount: number;
    publishedPostsCount: number; 
  }
  
  export interface UserAPI {
    id: string; 
    email: string; 
    username: string; 
    full_name: string; 
    last_name: string; 
    is_online: boolean; 
    first_name: string; 
    profile_url: string;
    folowers_count: number;
    folowing_count: number;
    published_posts_count: number; 
}
  