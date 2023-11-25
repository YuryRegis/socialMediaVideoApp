import React from "react";
import {useForm} from "react-hook-form";

import {Box, Button, FormTextInput, Screen, Text} from "@components";
import {NewPostHeader} from "./Components/ProfileHeader";
import {NewPostSchema, newPostSchema } from "./newPostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { PreviewContainer } from "./Components/PreviewContainer";


export function NewPostScreen() {
    const [fileName, setFileName] = React.useState<string>('anfkjadflkajfja;fkjal;kfdjalkdjf;lakjdfl;akjfl;akdsjflakj;flkajd;ff.mp4');
    const {control, formState, handleSubmit} = useForm<NewPostSchema>({
        resolver: zodResolver(newPostSchema),
        defaultValues: {
          title: '',
          description: '',
        },
        mode: 'onChange',
      });

    function submitForm({title, description}: NewPostSchema) {
    console.log('submitForm', title, description);
    // TODO - connect to post service
    };

    return (
        <Screen>
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
                    name="title"
                    label="Título"
                    control={control}
                    boxProps={{marginBottom: 's20'}}
                    placeholder="Crie um título para o seu post"
                    rules={{required: 'Título é obrigatório'}}
                />

                <PreviewContainer fileName={fileName}/>

                <Button
                    title="Enviar"
                    marginTop="s48"
                    disabled={!formState.isValid}
                    onPress={handleSubmit(submitForm)}
                />
            </Box>
        </Screen>
    );
}
