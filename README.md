# Imagetech

Teste de frontend aplicado pela ImageTech

O que está sendo utilizado:

- VueJS
- Vuex
- VueRouter
- TypeScript
- Sass/Scss
- Docker
- API: json-server

## Acessar

```
Login: admin@admin.com
Senha: Admin@123
```

## Comandos

```sh
# Para iniciar a aplicação modo de desenvolvimento
# Frontend: http://localhost:8080
# Api: http://localhost:8081
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
# $ ./run prod
```
