import {Post} from './postTypes';

export const postListMock: Post[] = [
    {
      id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
      description: 'Este é o meu primeiro post!',
      title: 'Um novo começo nas redes sociais.',
      author: {
        profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
        name: 'John Doe',
        userName: 'johndoe',
      },
      imageURL: 'https://i.imgur.com/VyfuWYa.jpg',
      reactionCount: 10,
      commentCount: 5,
      favoriteCount: 2,
      isLiked: false,
      isFavorited: false
    },
    {
      id: 'e2c56db5-67f1-44ab-94a3-9877efdc76a4',
      description: 'Confira esta foto incrível!',
      title: 'Uma foto que merece ser vista.',
      author: {
        profileURL: 'https://i.imgur.com/BrJUnRl.jpg',
        name: 'Jane Smith',
        userName: 'janesmith',
      },
      imageURL: 'https://i.imgur.com/KkcrB5y.jpg',
      reactionCount: 15,
      commentCount: 8,
      favoriteCount: 3,
      isLiked: false,
      isFavorited: false
    },
    {
      id: '3f251f7d-a6e8-4823-bc9b-97d0356d1dcf',
      description: 'Acabei de terminar de ler este livro e é incrível!',
      title: 'Uma leitura que vale a pena.',
      author: {
        profileURL: 'https://i.imgur.com/BxgHDci.jpg',
        name: 'Mark Johnson',
        userName: 'markjohnson',
      },
      imageURL: 'https://i.imgur.com/NdrA2BY.jpg',
      reactionCount: 20,
      commentCount: 12,
      favoriteCount: 5,
      isLiked: false,
      isFavorited: false
    },
    {
      id: '8aa14f92-af48-4f3a-897c-ec569d25bb30',
      description: 'Não posso acreditar que já é maio!',
      title: 'O tempo voa!',
      author: {
        profileURL: 'https://i.imgur.com/FmSbPv3.jpg',
        name: 'Amy Lee',
        userName: 'amylee',
      },
      imageURL: 'https://i.imgur.com/vkscdqk.jpg',
      reactionCount: 5,
      commentCount: 3,
      favoriteCount: 1,
      isLiked: false,
      isFavorited: false
    },
    {
      id: '6927c54e-df67-4fc0-a0ef-14d5ab6de58d',
      description: 'Dia de codificação!',
      title: 'Tempo para programar!',
      author: {
        profileURL: 'https://i.imgur.com/DF4Jfxq.jpg',
        name: 'Santiago Emilio',
        userName: 'sanemilio',
      },
      imageURL: 'https://i.imgur.com/rsOe2hC.jpg',
      reactionCount: 0,
      commentCount: 0,
      favoriteCount: 0,
      isLiked: false,
      isFavorited: false
    },
    {
      id: 'bd8de917-b256-402e-94fc-eb6ef1700a85',
      description: 'Qual é a sua cor favorita?',
      title: 'Vamos falar sobre preferências.',
      author: {
        profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
        name: 'John Doe',
        userName: 'johndoe',
      },
      imageURL: 'https://i.imgur.com/zx94i19.jpg',
      reactionCount: 2,
      commentCount: 1,
      favoriteCount: 0,
      isLiked: false,
      isFavorited: false
    },
    {
      id: '7b3b6e3d-14e2-4876-baf5-aeaed7b8a5ee',
      description: 'Estou tão animado para o fim de semana!',
      title: 'Hora de aproveitar!',
      author: {
        profileURL: 'https://i.imgur.com/BrJUnRl.jpg',
        name: 'Jane Smith',
        userName: 'janesmith',
      },
      imageURL: 'https://i.imgur.com/LWopzZH.jpg',
      reactionCount: 8,
      commentCount: 4,
      favoriteCount: 1,
      isLiked: false,
      isFavorited: false
    },
    {
      id: '15b13005-8494-45d4-85e7-cbdf1aa5bc7d',
      description: 'Acabei de voltar das férias e foi incrível!',
      title: 'Momentos inesquecíveis!',
      author: {
        profileURL: 'https://i.imgur.com/BxgHDci.jpg',
        name: 'Mark Johnson',
        userName: 'markjohnson',
      },
      imageURL: 'https://i.imgur.com/WZZLeHg.jpg',
      reactionCount: 25,
      commentCount: 10,
      favoriteCount: 4,
      isLiked: false,
      isFavorited: false
    },
    {
      id: 'e3f6fe02-91e5-42a1-a8b2-62b29b2f3777',
      description: 'Estou adorando este novo restaurante!',
      title: 'Descoberta gastronômica!',
      imageURL: 'https://i.imgur.com/FmSbPv3.jpg',
      author: {
        profileURL: 'https://i.imgur.com/OGQRFok.jpg',
        name: 'Amy Lee',
        userName: 'amylee',
      },
      reactionCount: 35,
      commentCount: 0,
      favoriteCount: 0,
      isLiked: false,
      isFavorited: false
    },
];

export const postListByIdMock: Post[] = [
  {
    id: '1',
    description: "Este é o meu primeiro post!",
    title: "Um novo começo nas redes sociais.",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/ec2f3oY.jpeg',
    reactionCount: 10,
    commentCount: 5,
    favoriteCount: 2,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '2',
    description: "Não acredito que já passou um mês desde o meu primeiro post. Grato pelo apoio!",
    title: "Refletindo sobre Meu Primeiro Passo nas Redes Sociais!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/KkcrB5y.jpg',
    reactionCount: 50,
    commentCount: 20,
    favoriteCount: 8,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '3',
    description: "Cada curtida, comentário e compartilhamento significa muito para mim. Obrigado pelo carinho!",
    title: "Celebrando Pequenas Vitórias nas Redes Sociais!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/VyfuWYa.jpg',
    reactionCount: 25,
    commentCount: 15,
    favoriteCount: 5,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '4',
    description: "Seu incentivo me mantém seguindo em frente. Vamos manter essa jornada vibrante!",
    title: "Gratidão pelo Apoio!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/BxgHDci.jpg',
    reactionCount: 40,
    commentCount: 18,
    favoriteCount: 7,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '5',
    description: "Compartilhando insights e experiências de crescimento do meu primeiro mês aqui!",
    title: "Lições Aprendidas em um Mês nas Redes Sociais!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/OGQRFok.jpg',
    reactionCount: 35,
    commentCount: 22,
    favoriteCount: 6,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '6',
    description: "Mergulhando em tópicos diversos e descobrindo perspectivas incríveis. Junte-se a mim!",
    title: "Explorando Novos Horizontes!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/WZZLeHg.jpg',
    reactionCount: 30,
    commentCount: 12,
    favoriteCount: 4,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '7',
    description: "Vocês todos tornam este espaço incrível. Vamos continuar inspirando uns aos outros!",
    title: "Apreciando a Comunidade!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/LWopzZH.jpg',
    reactionCount: 48,
    commentCount: 25,
    favoriteCount: 9,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '8',
    description: "Pausa para apreciar a jornada. Grato por cada passo!",
    title: "Compartilhando um Momento de Reflexão!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/zx94i19.jpg',
    reactionCount: 55,
    commentCount: 30,
    favoriteCount: 11,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '9',
    description: "Adorando as discussões aqui. Vamos manter o diálogo vivo!",
    title: "Conversas Engajadas!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/rsOe2hC.jpg',
    reactionCount: 42,
    commentCount: 28,
    favoriteCount: 10,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '10',
    description: "Explorando além da superfície. Vamos mergulhar em assuntos intrigantes!",
    title: "Aprofundando em Tópicos!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/vkscdqk.jpg',
    reactionCount: 38,
    commentCount: 20,
    favoriteCount: 7,
    isLiked: false,
    isFavorited: false
  },
  {
    id: '11',
    description: "Refletindo sobre o progresso feito e lições aprendidas. Animado pelo que está por vir!",
    title: "Um Mês de Crescimento e Aprendizado!",
    author: {
      profileURL: 'https://i.imgur.com/YeE3yKf.jpg',
      name: 'John Doe',
      userName: 'johndoe',
    },
    imageURL: 'https://i.imgur.com/NdrA2BY.jpg',
    reactionCount: 60,
    commentCount: 35,
    favoriteCount: 15,
    isLiked: false,
    isFavorited: false
  }
];
