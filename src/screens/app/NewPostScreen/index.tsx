import React from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {Alert} from "react-native";
import {postService} from "@domain";
import {useUserPostStore} from "@context";
import {NewPostHeader} from "./Components/ProfileHeader";
import {NewPostSchema, newPostSchema} from "./newPostSchema";
import {PreviewContainer} from "./Components/PreviewContainer";
import {Box, Button, FormTextInput, Screen} from "@components";


export function NewPostScreen() {
    const {imageURL, setTitle, setDescription} = useUserPostStore(state => state);

    const {control, formState, handleSubmit, reset} = useForm<NewPostSchema>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
          title: '',
          description: '',
        },
        mode: 'onChange',
      });
    
    async function submitForm({title, description}: NewPostSchema) {
        const _description = description || '';
        
        setTitle(title);
        setDescription(_description);

        await postService.createPost({
            imageURL, title, description: _description
        });

        Alert.alert('Post enviado com sucesso!');
        reset();
    };

    return (
        <Screen scrollable>
           <Box justifyContent='center' > 
                <NewPostHeader/>
           </Box>

            <Box marginTop='s16'>
                <FormTextInput
                        name="title"
                        label="Título"
                        control={control}
                        boxProps={{marginBottom: 's20'}}
                        placeholder="Crie um título para o seu post"
                        rules={{required: 'Título é obrigatório'}}
                />

                <FormTextInput
                    name="description"
                    label="Descrição"
                    control={control}
                    boxProps={{marginBottom: 's20'}}
                    placeholder="Diga algo legal, gere engajamento!"
                    rules={{required: 'Título é obrigatório'}}
                />

                <PreviewContainer/>

                <Button
                    title="Enviar"
                    marginTop="s16"
                    marginBottom="s20"
                    disabled={!formState.isValid || !imageURL}
                    onPress={handleSubmit(submitForm)}
                />
            </Box>
        </Screen>
    );
}
