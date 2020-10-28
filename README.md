# Case Técnico da DP6
Aqui é possível verificar o código colocado para o fornecimento de informações para o *Google Analytics*.

Nas páginas "sobre.html" e "analise.html" os códigos javascript correspondentes a cada uma delas foi colocado na tag <code>script</code> no final da tag <code>body</code>.
A finalidade é manter o código mais limpo e organizado.

Seguem as etapas:

## 1. Todas as páginas
  - [x] No menu, há um link que direciona o usuário para a página de contato da DP6. Configure um evento como o seguinte:<br>
    __Categoria__: “menu”<br>
    __Ação__: “entre_em_contato”<br>
    __Rótulo__: “link_externo”<br>

  - [x] Também há um link que inicializa o download de um conteúdo. Configure um evento como o seguinte:<br>
    __Categoria__: “menu”<br>
    __Ação__: “download_pdf”<br>
    __Rótulo__: “download_pdf”<br>

## 2. Página analise.html
  - [x] Sempre que um dos botões de "VER MAIS" for clicado, configure o envio do seguinte evento customizado:<br>
    __Categoria__: “analise”<br>
    __Ação__: “ver_mais”<br>
    __Rótulo__: [nome_do_conteudo]*<br>
  \* Substitua [nome_do_conteudo] pelo nome do botão, como “Lorem”, “Ipsum” e “Dolor”.

## 3. Página sobre.html
  - [x] Implemente os seguintes eventos ao preencher cada um dos campos do formulário:<br>
    __Categoria__: “contato”<br>
    __Ação__: [id_do_campo]*<br>
    __Rótulo__: “preencheu”<br>
  \* Substitua [id_do_campo] pelo id do campo preenchido, dentre “nome”, “email”, “telefone” ou “aceito”.

  - [x] Quando o formulário for enviado, será exibido um popup. Na exibição deste popup, envie o seguinte evento:<br>
    __Categoria__: “contato”<br>
    __Ação__: “enviado”<br>
    __Rótulo__: “enviado”<br>
