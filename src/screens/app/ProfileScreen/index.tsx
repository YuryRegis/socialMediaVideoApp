import React from "react";

import {Box, Screen} from "@components";
import { ProfileHeader } from "./Components/ProfileHeader";

export function ProfileScreen() {
    return (
        <Screen>
           <Box justifyContent='center' > 
                <ProfileHeader/>
           </Box>
        </Screen>
    );
}
