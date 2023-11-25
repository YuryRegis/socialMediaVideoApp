import React from "react";

import {stringUtils} from '@utils';
import {Box, Button, FormTextInput, Icon, Screen, Text, TouchableOpacityBox} from "@components";

interface IPreviewContainerProps {
    fileName: string;
};

export function PreviewContainer({fileName}: IPreviewContainerProps) {
    const truncatedFileName = stringUtils.truncateName(fileName, 30);
    const isFileSelected = Boolean(fileName);
    
    return (
        <Box
            padding='s16'
            marginTop='s16'
            borderWidth={1}
            borderRadius='s8'
            borderColor='gray4'
            flexDirection="row"
            justifyContent="center"
        >

            <Box style={$textWrapper}>
                {isFileSelected && <Text color="gray1">{truncatedFileName}</Text>}
                {!isFileSelected && <Text color="gray2">Adicione uma vídeo</Text>}
            </Box>

            <TouchableOpacityBox marginRight='s16'>
                <Icon 
                    name="camera" 
                    color="buttonPrimary" 
                    size={24} />
            </TouchableOpacityBox>
        </Box>
    );
}

const $textWrapper = {
    width: '100%',
    marginRight: -16,
    alignItems: 'center',
};
