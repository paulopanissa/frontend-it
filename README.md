# Imagetech

Teste de frontend aplicado pela ImageTech

O que está sendo utilizado:

- VueJS
- Vuex
- VueRouter
- TypeScript
- Sass/Scss
- Docker
- Jest
- API: json-server

## Comandos

```sh
# Para iniciar a aplicação modo de desenvolvimento
# Frontend: http://localhost:8080
# Api: http://localhost:8082 || consumir a api dentro do docker frontend URL: http://api-server/
$ ./run start

# Para instalar packages no frontend
$ ./run yarn add <package>

# Para reiniciar container
# api-server | frontend | nginx-prod
$ ./run restart <container>

# Recriar o container frontend
$ ./run recreate

# Para pausar os containers
$ ./run stop

# Acessar o para do container
# name: frontend, nginx
$ ./run bash <name>

# Rodar em modo de produção
# URL: http://localhost
$ ./run prod
```
