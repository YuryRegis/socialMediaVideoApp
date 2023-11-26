# RPC - Social Media Video App

## Descrição

Teste técnico para desenvolvedor mobile (react-native) na empresa RPC (GRPCOM). O desafio consiste em desenvolver um aplicativo de rede social para dispositivos móveis utilizando React Native e TypeScript. O aplicativo permitirá aos usuários compartilharem vídeos, interagirem com outros usuários através de curtidas, comentários e compartilhamentos, além de possuir uma funcionalidade como upload de vídeos.

## Download Release

- Android (em construção)

## Telas

| LOGIN | FEED | UPLOAD | PROFILE | FAVORITES |
| --- | --- | --- | --- | --- |
| ![login](https://github.com/YuryRegis/socialMediaVideoApp/assets/29512626/c90d2738-20f1-42f5-9c40-7789ca5d3a71) | ![Simulator Screenshot - iPhone SE (3rd generation) - 2023-11-26 at 09 25 50](https://github.com/YuryRegis/socialMediaVideoApp/assets/29512626/391a9066-5f7d-452d-8b3d-8c93893d8de8) | ![upload](https://github.com/YuryRegis/socialMediaVideoApp/assets/29512626/d1eddd45-43e2-4ded-a2a2-997e34924dfc) | ![profile](https://github.com/YuryRegis/socialMediaVideoApp/assets/29512626/8fc2c40d-ce9d-4b82-8fc6-1c9ab5626571) | ![favorites](https://github.com/YuryRegis/socialMediaVideoApp/assets/29512626/e0b5e4d3-0097-4efe-a104-aeffaca15b76) |

#### Login

- Permitir que os usuários façam login com suas contas existentes ou criem novas contas utilizando e-mail ou autenticação social (por exemplo, Google e Apple).

#### Feed

- Exibir uma lista de vídeos compartilhados por outros usuários em um feed contínuo e rolagem infinita.
- Cada vídeo deve ter um título e informações do autor (nome de usuário e foto de perfil).
- Os usuários devem poder interagir com os vídeos através de curtidas, comentários e compartilhamentos.

#### Página de Upload de Vídeo

- Permitir que os usuários façam o upload de vídeos curtos a partir do rolo de câmera do dispositivo ou galeria.
- Os usuários devem poder adicionar um título e uma descrição ao vídeo antes de fazer o upload.

#### Perfis de Usuário

- Cada usuário deve ter um perfil que exiba suas informações públicas, vídeos enviados e número de seguidores e seguindo.

## Backend

Para este teste, você pode simular a integração com um servidor back-end, usando chamadas assíncronas fictícias (mock) para obter e enviar dados.

### Bibliotecas em destaque

- Zod: Biblioteca de validação de esquema altamente eficiente e tipada.
- MMKV: Oferece acesso rápido e eficiente para armazenamento de dados no dispositivo.
- Zustand: Uma biblioteca simples e escalável para gerenciamento de estado no React.
- Lottie: Biblioteca para renderizar animações vetoriais.

## Contribuição

Contribuições são bem-vindas! Se encontrar algum problema ou desejar implementar melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.


# Configuração - GoogleServices

Para configurar o GoogleServices no React Native, siga as etapas abaixo:
---
### 1. Criar Projeto no Google Cloud Console:

Acesse o [Google Cloud Console](https://console.cloud.google.com) e crie um novo projeto.

### 2. Habilitar APIs Necessárias:

Vá para a seção "APIs & Services" e habilite as APIs necessárias, como Google Sign-In, Firebase, entre outras dependendo das funcionalidades que deseja utilizar.

### 3. Gerar Arquivo GoogleServices:
Para **aplicativos Android**, baixe o arquivo `google-services.json` do Console do Firebase após registrar seu aplicativo Android. Para **aplicativos iOS**, baixe o arquivo `GoogleService-Info.plist`.

### 4. Configuração no Projeto React Native:

No diretório raiz do projeto:
   - Para Android: Coloque o arquivo `google-services.json` dentro do diretório `android/app`.
   - Para iOS: Coloque o arquivo `GoogleService-Info.plist` dentro do diretório `ios/`.

### 5. Configuração Adicional:

Siga as instruções específicas do Firebase/Google para configurar quaisquer outras etapas necessárias para autenticação, uso de serviços, etc.


# Configuração - React Native:

## 1. Instalando dependências:
```bash
yarn install
```
Se usar simulador iOS:
```bash
cd ios && pod install && cd ..
```
## 2. Buildadndo app no simulador
Android
```bash
yarn android
```
iOS
```bash
yarn ios
```
### Inicializando projeto
```bash
yarn start
```

# Saiba mais

Mis informações e documentações sobre Firebase e React Native:

- [Frebase](https//firebase.google.com/docs) - Firebase docs.
- [Iniciando projeto RN ](https://reactnative.dev/docs/getting-started) - React Native docs.
- [Configuração de ambiente](https://reactnative.dev/docs/environment-setup) - Configurando ambiente React Native.
