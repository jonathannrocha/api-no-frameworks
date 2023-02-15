# Api no frameworks

This is a simple example of a REST API in Nodejs without the use of any framework, using only the internal http module of the runtime itself.

The main focus of the project was to understand how frameworks in general act, seeking to understand in a more micro way how this works.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

## Documentação da API Heroes

### Returns all items

```http
  GET /heroes/
```

##### Response

```
{"results":[{"id":"7707da5f-5c9e-405f-a3c9-28fab08fbb3e","name":"Izuzo Midorya","age":15,"power":"all for one"},
{"id":"7707da5f-5c9e-405f-a3c9-28fab08fbb2e","name":"Naruto Uzumaki","age":17,"power":"Kurama"}]}
```

### Returns a heroes

```http
  GET /heroes/${id}
```

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `id`      | `string` | **Obrigatório**. |

##### Response

```
  {"results":[{"id":"7707da5f-5c9e-405f-a3c9-28fab08fbb3e","name":"Izuzo Midorya","age":15,"power":"all for one"}]}

```

### Create new Hero

```http
  POST /heroes/${id}
```

| Parâmetro | Tipo     | Descrição                                                      |
| :-------- | :------- | :------------------------------------------------------------- |
| `id`      | `string` | **Obrigatório**.                                               |
| `hero`    | `object` | { name: string, power: string, age: number } **Obrigatório** . |

#### Reponse

```
  {"sucess":"Hero created whit sucess!!","id":"34239e5e-2280-45b2-9473-b7877cd60941"}
```

### Upgrade hero

```http
  PATCH /update/${id}
```

| Parâmetro     | Tipo     | Descrição        |
| :------------ | :------- | :--------------- |
| `id`          | `string` | **Obrigatório**. |
| `data-update` | `object` | **Obrigatório**. |

#### Reponse

```
  {"id":"34239e5e-2280-45b2-9473-b7877cd60941","name":"TESTE","age":15,"power":"all for one"}
```

### Delete hero

```http
  Delete/${id}
```

| Parâmetro | Tipo     | Descrição        |
| :-------- | :------- | :--------------- |
| `id`      | `string` | **Obrigatório**. |

#### Reponse

```
  {"sucess":"hero 34239e5e-2280-45b2-9473-b7877cd60941 sucess delete"}
```

## Stack utilizada

**Back-end:** Node

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jonathannrocha/api-no-framework.git
```

Entre no diretório do projeto

```bash
  cd api-no-framework
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm test
```

## Autores

- [@jonathannrocha](https://github.com/jonathannrocha)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
