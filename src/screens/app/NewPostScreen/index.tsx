import React from "react";

import {Box, Screen, Text} from "@components";
import {NewPostHeader} from "./Components/ProfileHeader";


export function NewPostScreen() {

    return (
        <Screen>
           <Box justifyContent='center' > 
                <NewPostHeader/>
           </Box>
        </Screen>
    );
}
