import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {permissionService} from '@services';
import {NewPostHeader} from "./Components/ProfileHeader";
import {NewPostSchema, newPostSchema} from "./newPostSchema";
import {PreviewContainer} from "./Components/PreviewContainer";
import {Box, Button, FormTextInput, Screen} from "@components";
import { useUserPostStore } from "@context";


export function NewPostScreen() {
    const {checkPermission} = permissionService;
    const imageURL = useUserPostStore(state => state);

    const {control, formState, handleSubmit, reset} = useForm<NewPostSchema>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
          title: '',
          description: '',
        },
        mode: 'onChange',
      });
    
    useEffect(() => {
        checkPermission();
    }, [checkPermission]);  

    function submitForm({title, description}: NewPostSchema) {
        console.log('submitForm', title, description);
        // TODO - connect to post service
        
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
