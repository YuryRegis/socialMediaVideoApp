import React from 'react';
import {Dimensions} from 'react-native';
import {useForm} from 'react-hook-form';
import NexenPlayer from 'react-native-best-player';
import {zodResolver} from '@hookform/resolvers/zod';

import {Post} from '@domain';
import {videoImportUtils} from '@utils';
import {useAuth, usePostListStore} from '@context';
import {Text, Box, FormTextInput, TouchableOpacityBox, Icon} from '@components';
import {HeaderFormSchema, headerSchema} from './HeaderFormSchema';


const {width: $width} = Dimensions.get("window");

interface IComentHeaderList { post: Post; };

export function ComentHeaderList({post}: IComentHeaderList) {
  const {authData} = useAuth();
  const {addCommentToPost} = usePostListStore();
    
  const {control, formState, handleSubmit} = useForm<HeaderFormSchema>({
    resolver: zodResolver(headerSchema),
    defaultValues: {
        text: '',
    },
    mode: 'onChange',
  });
  
  function submitForm({ text }: HeaderFormSchema) {
    addCommentToPost({
      text, 
      postID: post.id, 
      author: {
        id: authData?.user.id as string, 
        username: authData?.user.username as string,
        profileURL: authData?.user.profileURL as string,
    }});
  };
  
  return (
    <>
      <NexenPlayer
        style={{width: $width, height: $width}}
        // @ts-ignore next-line
        source={{source: videoImportUtils[post.id]}}
        config={{resizeMode: 'cover', repeat: true, autoPlay: true, }}
      />

      <Box paddingHorizontal='s24' paddingVertical='s16'> 

        <Text textAlign='center' preset='headingMedium'>Comentários</Text>

        <Box flexDirection='row' justifyContent='center' alignItems='center'>
              <FormTextInput
                  label=''
                  name="text"
                  control={control}
                  boxProps={{marginBottom: 's16', marginRight: 's12', flex: 1}}
                  placeholder="Comente algo bacana aqui!"
                  rules={{ required: 'Digite algo antes de enviar' }}
              />

              <TouchableOpacityBox alignItems='center' paddingTop='s10' onPress={handleSubmit(submitForm)}>
                  <Icon name='comment' size={32} color='gray3' />
                  <Text textAlign='center' bold preset='paragraphCaptionSmall' color='gray3'>Enviar</Text>
              </TouchableOpacityBox>
        </Box>      
      </Box>
    </>  
  );
};
