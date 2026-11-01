# API de Gerenciamento de Pedidos - TASIII

API REST desenvolvida em Node.js com Express para o gerenciamento de pedidos de uma pequena loja, estruturada com base em uma arquitetura em camadas (MVC). Projeto prático avaliativo da disciplina de Tópicos Avançados em Sistemas de Informação II.

---

## Tecnologias Utilizadas

* **Node.js** (com suporte nativo a ESM e `--watch`)
* **Express** (`^5.3.0`)
* **Postman / Insomnia** (para testes manuais de rotas)
* **Git e GitHub** (para versionamento de código)

---

## Arquitetura do Projeto

O projeto adota uma organização limpa e modular inspirada no padrão MVC (Model-View-Controller), dividindo as responsabilidades da seguinte forma:

* `src/routes/`: Define os pontos de entrada das rotas da API (`/pedidos`).
* `src/controllers/`: Recebe as requisições HTTP, valida o fluxo de entrada e aciona os serviços correspondentes, formatando as respostas.
* `src/services/`: Contém a regra de negócio principal, validações de dados (como tipos, valores e prioridades) e a manipulação dos dados em memória (`pedidos`).

---

## Como Instalar e Executar

Siga os passos abaixo para clonar e rodar o projeto na sua máquina:

1. Clone o repositório:
   ```bash
   git clone https://github.com/MestreJoker/api-gerenciamento-pedidos.git
   ```

2. Entre na pasta do projeto:
   ```bash
   cd "Projeto TASIII"
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor em modo de desenvolvimento (com monitoramento automático):
   ```bash
   npm start
   ```

O servidor estará rodando em `http://localhost:3000`.

---

## Endpoints da API e Exemplos

### 1. Cadastrar Pedido
* **Método:** `POST`
* **Rota:** `/pedidos`
* **Descrição:** Cria um novo pedido com os dados informados.
* **Exemplo de Body (JSON):**
  ```json
  {
    "cliente": "Gabriel dos Santos Gomes",
    "tipo": "entrega",
    "valor": 350,
    "prioridade": "media"
  }
  ```
* **Resposta de Sucesso:** `201 Created`

---

### 2. Listar Pedidos
* **Método:** `GET`
* **Rota:** `/pedidos`
* **Descrição:** Retorna a lista com todos os pedidos cadastrados.
* **Resposta de Sucesso:** `200 OK`

---

### 3. Consultar Pedido por ID
* **Método:** `GET`
* **Rota:** `/pedidos/:id`
* **Descrição:** Retorna os detalhes de um pedido específico com base no ID.
* **Resposta de Sucesso:** `200 OK` (ou `404 Not Found` caso o ID não exista).

---

### 4. Atualizar Status do Pedido
* **Método:** `PATCH`
* **Rota:** `/pedidos/:id/status`
* **Descrição:** Atualiza o status atual de um pedido existente.
* **Exemplo de Body (JSON):**
  ```json
  {
    "status": "em_preparacao"
  }
  ```
* **Resposta de Sucesso:** `200 OK` (ou `400 Bad Request` para dados inválidos e `404 Not Found` para ID inexistente).

---

## Validações e Regras de Negócio

* **Cliente:** Campo obrigatório, do tipo texto, não podendo ser vazio nem conter apenas espaços nas extremidades.
* **Valor:** Deve ser estritamente numérico e maior do que zero.
* **Tipo:** Valores aceitos e reconhecidos: `entrega` ou `retirada`.
* **Prioridade:** Valores aceitos e reconhecidos: `baixa`, `media` ou `alta`.
* **Status (Transições):** Os estados básicos suportados pelo ciclo de vida do pedido são: `recebido`, `em_preparacao`, `enviado`, `entregue` e `cancelado`.

---

## Uso de IA

Conforme permitido pelas diretrizes do projeto, ferramentas de Inteligência Artificial foram utilizadas como suporte técnico durante o desenvolvimento para otimização de rotinas e estruturação de documentação. 

* **Tarefas auxiliadas pela IA:** 
  1. Diagnóstico e correção de erros nos códigos.
  2. Auxilio na organização da arquitetura do projeto e nomeação dos arquivos.
  4. Formatação do arquivo `README.md`.
* **Exemplo de sugestão modificada:** 
  * *Sugestão original da IA:* Utilizar a prioridade padrão com a string `"normal"`.
  * *Modificação realizada:* A sugestão foi adaptada para atender ao modelo restrito implementado no `pedidoServices`, utilizando estritamente as prioridades `baixa`, `media` e `alta`. 
  * *Justificativa:* Manter a coerência com as validações lógicas programadas nas regras de negócio da camada de serviços da API.

---

## 📸 Evidências de Testes
<img width="453" height="246" alt="criacao" src="https://github.com/user-attachments/assets/24531ae4-44f8-4ff1-bbb3-3de81a64b4c5" />
<img width="453" height="246" alt="validacao" src="https://github.com/user-attachments/assets/f1225dd9-2c90-4383-a3f5-d29106e091d1" />
<img width="453" height="246" alt="listagem" src="https://github.com/user-attachments/assets/3aa3bb90-753a-4ce4-be84-dd445b264518" />
<img width="453" height="246" alt="consulta-inexistente" src="https://github.com/user-attachments/assets/b4e1f27c-72e7-4e0e-a610-4afc076a7be5" />
<img width="453" height="246" alt="atualizacao" src="https://github.com/user-attachments/assets/b274dad6-9a1a-4398-8d9f-9a7b27b135d3" />

As capturas de tela dos testes realizados via Postman também estão presentes na pasta `evidencias/` na raiz do repositório.
