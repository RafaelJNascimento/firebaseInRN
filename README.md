# FirebaseInRN

## Objetivo

O objetivo do FirebaseInRN é oferecer um exemplo de implementação simplificada e eficaz das bibliotecas do Firebase 

## Tecnologias Utilizadas

- **Firebase Auth:** O Firebase Authentication fornece serviços de back-end para autenticar usuários no aplicativo.
- **React Native:** Framework para o desenvolvimento de aplicativos móveis multiplataforma, baseado em JavaScript e React.
- **Yup:** Biblioteca de validação de esquemas JavaScript para análise e validação de dados.
- **React Hook Form:** Biblioteca de gerenciamento de formulários React eficiente e flexível, baseada em hooks.

## Inicie o aplicativo

Para executar o FirebaseInRN ao seu projeto, siga os passos abaixo:

1. **Instalação das Dependências:**
    Certifique-se de instalar as dependências:

    ```bash
    # usando Yarn
    yarn install

    # Em caso de iOS é necessário entrar no diretório ios
    # e rodar o seguinte comando
    cd ios
    pod install
    ```

    #### Android

    Para iniciar o Metro, execute o comando a baixo dentro da pasta do projeto React Native:

    ```bash
    yarn start
    ```

    Deixe que o Metro Bundler seja executado em seu próprio terminal. Abra um novo terminal dentro da pasta do projeto React Native. Execute o seguinte comando:

    ```bash
    # Usando Yarn
    yarn android
    ```

    #### Ios

    Os aplicativos para ios só compilam em maquinas apple.

    Para iniciar o Metro, execute o comando a baixo dentro da pasta do projeto React Native:

    ```bash
    yarn start
    ```

    Deixe que o Metro Bundler seja executado em seu próprio terminal. Abra um novo terminal dentro da pasta do projeto React Native. Execute o seguinte comando:

    ```bash
    # Ou usando Yarn
    yarn ios
    ```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

Feito por Rafael J. Nascimento