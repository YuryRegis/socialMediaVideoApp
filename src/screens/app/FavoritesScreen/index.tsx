import React from "react";

import {Box, Screen} from "@components";
import {FavoritesHeader} from "./Components/ProfileHeader";


export function FavoritesScreen() {

    return (
        <Screen>
           <Box justifyContent='center' > 
               <FavoritesHeader/>
           </Box>
        </Screen>
    );
}
