![enter image description here](https://scontent.fplu8-1.fna.fbcdn.net/v/t1.18169-9/10306232_578591528948553_5843355773361946303_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEock17EPNgwzy-EKbWShuLFqDCxxlaPxcWoMLHGVo_F-4Z4gvl0IH19Psga-keg9NpShF6Orn_OHg5_eRPc5jI&_nc_ohc=1945BCRc8V0AX9G9q9D&_nc_ht=scontent.fplu8-1.fna&oh=00_AT9I730XfkHfBDKywcESjX8RCvwCIfuWTcMIij4GFTRNfg&oe=62602755)

# Befective Contacts Api!

Api de contatos da befective .


# Requerimentos

Antes de executar a aplicacao e necessario que voce tenha o docker instalado
em sua maquina, pois utilizamos o mesmo para prover o banco de dos (MYSQL)
[Pagina de download do docker.](https://docs.docker.com/desktop/)

# Primeiros passos

Apos instalar o docker e necessario iniciar o container voce pode fazer isso executando o comando:

    docker compose up 
Adicione o parametro -d caso queira que o processo rode em background

    docker compose up -d

## Docker Env
Apos subir o container no docker sera provido um servidor mysql nessas configuracoes padroes 

    Hostname : localhost
    Port: 3306
    Database: befective
    Username: befective
    Password : befective



# Instalando Dependencias da aplicacao

Para instalar as dependencias rode o comando

    yarn install ( recomendado ) ou npm install

## Iniciando a aplicacao 

Para iniciar a aplicacao rode o comando

    yarn start:dev



# Documentacao da api
Pode ser acessada atraves da seguinte da url a 

> http://127.0.0.1:3000