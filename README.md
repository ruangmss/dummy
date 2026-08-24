# 🛍️ Dummy

Uma aplicação web de **e-commerce** desenvolvida em **React**, que permite explorar produtos, pesquisar e filtrar itens, gerenciar uma sacola de compras e simular todo o processo de compra através da **DummyJSON API**.

> **Nota:** Este projeto foi desenvolvido com o objetivo de aprofundar conhecimentos em **React**, consumo de APIs REST, componentização, gerenciamento de estado, autenticação e roteamento. As operações de cadastro, edição de usuário e finalização de pedidos são apenas simulações e não persistem na API.

---

# 🚀 Funcionalidades

- 🏠 Página inicial com produtos em destaque, categorias e benefícios da loja.
- 🔎 Busca de produtos por nome.
- 🗂️ Catálogo completo organizado por categorias.
- ↕️ Ordenação de produtos por diferentes critérios.
- 📍 Paginação sincronizada com os parâmetros da URL.
- 📄 Página individual com descrição, preço, desconto, estoque e galeria de imagens.
- ⭐ Exibição de avaliações e produtos relacionados.
- 🛍️ Sacola de compras com controle de quantidade e remoção de itens.
- 💾 Persistência da sacola no `localStorage`.
- 👤 Cadastro, login, logout e edição de perfil simulados.
- 🔐 Autenticação com token e login automático.
- 💳 Checkout com validação dos dados pessoais, endereço e pagamento.
- 💰 Opções de pagamento via PIX, cartão de crédito, cartão de débito e boleto.
- 📱 QR Code e contagem regressiva para pagamentos via PIX.
- ✅ Página de confirmação após a conclusão do pedido.
- 🔔 Notificações de sucesso e erro através de *toasts*.
- 🖼️ Skeleton Loading e indicadores visuais durante o carregamento.
- ⚠️ Tratamento de erros, resultados vazios e páginas não encontradas.
- 🧭 Títulos e descrições de página atualizados dinamicamente.
- 📱 Interface responsiva.

---

# 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- SVGR
- DummyJSON API

---

# 🌐 API Utilizada

Os dados de produtos e usuários apresentados na aplicação são obtidos através da **DummyJSON API**.

[https://dummyjson.com/](https://dummyjson.com/)

Entre os recursos consumidos estão:

- Produtos
- Categorias
- Pesquisa e ordenação
- Avaliações e informações de estoque
- Autenticação de usuários
- Cadastro e edição de perfil
- Criação de carrinhos

> A DummyJSON simula operações de escrita. Cadastros, alterações de perfil e pedidos enviados não são armazenados permanentemente.

---

# 📚 Conceitos Aplicados

Durante o desenvolvimento foram utilizados diversos conceitos importantes do ecossistema React, entre eles:

- Componentização
- Hooks (`useState`, `useEffect`, `useContext`, `useCallback`, `useRef`...)
- Hooks personalizados
- Context API
- React Router
- Rotas dinâmicas e páginas protegidas
- Navegação programática (`useNavigate`)
- Manipulação de parâmetros da URL (`useSearchParams`)
- Consumo de APIs REST com `fetch`
- Autenticação baseada em token
- Persistência de estado com `localStorage`
- Formulários controlados
- Validação e máscaras de campos
- Renderização condicional
- Paginação, busca e ordenação
- Skeleton Loading e estados de carregamento
- Tratamento de erros
- SEO básico com metadados dinâmicos
- Organização e reutilização de componentes

---

# 🎨 Design

A interface foi desenvolvida para proporcionar uma experiência de compra clara, moderna e intuitiva.

O projeto utiliza:

- Identidade visual própria;
- Componentes reutilizáveis;
- Layout responsivo;
- Hierarquia visual para preços, descontos e estoque;
- Transições e feedbacks visuais;
- Skeletons durante o carregamento;
- Navegação fluida entre catálogo, produto, sacola e checkout.

---

# 👤 Desenvolvedor

Projeto desenvolvido por **Ruan Gomes** como parte da evolução prática nos estudos de React.

> *"Cada projeto representa um novo passo na construção de aplicações mais organizadas, performáticas e intuitivas."*
