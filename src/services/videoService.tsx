import {launchImageLibrary, ImagePickerResponse} from 'react-native-image-picker';


async function chooseVideo(): Promise<ImagePickerResponse | undefined> {
    const response: ImagePickerResponse = await launchImageLibrary({
        mediaType: 'video',
        videoQuality: 'high',
    });
    return response;
};


export const videoService = {
    chooseVideo,
};
