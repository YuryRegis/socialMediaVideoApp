import React, {useEffect, useState} from "react";
import {Dimensions, Image, ViewStyle} from "react-native";

import {stringUtils} from '@utils';
import {videoService} from "@services";
import {ActivityIndicator, Box, Icon, Text, TouchableOpacityBox} from "@components";
import { useUserPostStore } from "@context";


const {width} = Dimensions.get('window');
const PREVIEW_SIZE = width - 48;

export function PreviewContainer() {
    const [fileName, setFileName] = useState<string>('');
    const [imageURL, setImageURL] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const userPostStore = useUserPostStore(state => state);

    async function handleChooseVideo() {
        setIsLoading(true);
        const response = await videoService.chooseVideo();
        if (response?.assets) {
            const fileUri = response.assets[0].uri as string;
            const truncatedFileName = stringUtils.truncateName(
                response.assets[0]?.fileName as string, 30
            );
            setImageURL(fileUri);
            userPostStore.setImageURL(fileUri);
            setFileName(truncatedFileName);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Box
                padding='s16'
                marginTop='s16'
                borderWidth={1}
                borderRadius='s8'
                marginBottom="s20"
                borderColor='gray4'
                flexDirection="row"
                justifyContent="center"
            >

                <Box style={$textWrapper}>
                    {Boolean(fileName) && <Text color="gray1">{fileName}</Text>}
                    {!Boolean(fileName) && <Text color="gray2">Adicione um vídeo</Text>}
                </Box>

                {!isLoading && 
                    <TouchableOpacityBox onPress={handleChooseVideo} marginRight='s16'>
                        <Icon 
                            size={24}
                            name="camera" 
                            color="buttonPrimary"/>
                    </TouchableOpacityBox> }
                
                {isLoading && 
                    <Box marginRight="s16">
                        <ActivityIndicator color="buttonPrimary" size="small" />
                    </Box> }
                
            </Box>
            
            <Box 
            {...$Size}
            borderWidth={1}
            marginTop="s16"
            overflow="hidden"
            marginBottom="s20"
            borderRadius="s16"
            borderColor="gray3"
            alignItems="center"
            justifyContent="center"
            backgroundColor={Boolean(imageURL) ? "background" : "gray5"}>

            {Boolean(imageURL) && <Image source={{uri: imageURL}} {...$Size} />}
            
            {!Boolean(imageURL) && (<>
                <Icon name="camera" size={48} color="gray3" />
                <Text italic bold color="gray3" preset="paragraphLarge" textAlign="center">Preview</Text>
            </>)}
        </Box>
    </>
    );
}

const $textWrapper: ViewStyle = {
    width: '100%',
    marginRight: -16,
    alignItems: 'center',
};

const $Size = {
    width: PREVIEW_SIZE,
    height: PREVIEW_SIZE,
};
