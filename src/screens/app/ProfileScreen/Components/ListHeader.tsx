import React from "react";
import {Image} from "react-native";

import {User} from "@domain";
import {Box, Text} from "@components";
import {ProfileHeader} from './ProfileHeader';
import { stringUtils } from "@utils";


interface IListHeader {
    user: User;
};

export function ListHeader({user}: IListHeader) {
    return (
        <Box>
            <ProfileHeader/>

            <Box alignItems="center">
                
                <Image style={$Image} source={{uri: stringUtils.getUriOrDefaultUser(user.profileURL)}}/>

                <Box marginTop='s16' justifyContent="center" alignItems="center">
                    <Text preset="headingMedium">
                        {user.fullName}
                    </Text>
                    <Text preset="paragraphMedium">
                        {`@${user.username}`}
                    </Text>
                </Box>

                <Box paddingVertical="s16" width='100%' justifyContent="space-evenly" flexDirection="row">
                    <Box alignItems="center">
                        <Text bold preset="paragraphMedium">{user.publishedPostsCount}</Text>
                        <Text preset="paragraphCaptionSmall">Publicações</Text>
                    </Box>

                    <Box  alignItems="center">
                        <Text bold preset="paragraphMedium">{user.folowersCount}</Text>
                        <Text preset="paragraphCaptionSmall">Seguidores</Text>
                    </Box>

                    <Box alignItems="center">
                        <Text bold preset="paragraphMedium">{user.folowingCount}</Text>
                        <Text preset="paragraphCaptionSmall">Seguindo</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

const $Image = {
    width: 64,
    height: 64,
    borderRadius: 24,
};
