# Entre Nós — surpresa digital

Site romântico estático, feito com HTML, CSS e JavaScript. Não precisa de servidor nem banco de dados.

## Como abrir no computador
1. Extraia a pasta `entre-nos`.
2. Abra `index.html` no navegador (ou use a extensão Live Server no VS Code).

## Personalização antes de publicar

### 1. Fotos
Coloque quatro fotos de vocês na pasta `assets/images/` com estes nomes:
- `foto-1.jpg`
- `foto-2.jpg`
- `foto-3.jpg`
- `foto-4.jpg`

Se quiser usar PNG, altere também a extensão no `index.html`.

### 2. Música
O projeto já inclui `assets/music/ambiente-romantico.mp3`: uma trilha instrumental original, suave e sem voz, criada para esta experiência. Ela toca em volume baixo depois que a pessoa toca em **Descobrir nossa história**. O controle no canto inferior permite pausar ou retomar.

### 3. Versículo bíblico
A carta apresenta 1 Coríntios 13:4–7 na tradução Almeida 1911. A fonte consultada identifica essa edição como domínio público: https://bibliaalmeida.com/1-corintios/13/ . A expressão “caridade” foi mantida conforme essa tradução antiga e é explicada no próprio cartão como sinônimo de amor.

### 4. Textos
Edite a carta, a linha do tempo e a declaração final diretamente no `index.html`.
Os 100 motivos ainda aguardam a lista pessoal que será fornecida. Os textos temporários estão no array `reasons` dentro de `js/script.js`; substitua-os pela lista completa antes da versão final.

## Publicar gratuitamente no GitHub Pages
1. Crie um repositório público chamado `entre-nos` no GitHub.
2. Envie todos os arquivos e pastas desta pasta para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde a publicação. O endereço será `https://SEU-USUARIO.github.io/entre-nos/`.

## Observações
- É um site estático: hospedagem no GitHub Pages é gratuita.
- Fotos e música ficam públicas junto com o site. Não coloque conteúdo íntimo ou que vocês não queiram tornar acessível a quem tiver o link.
- A trilha instrumental original já está incluída na pasta `assets/music/`.
