# Usar una imagen ligera de Nginx para servir archivos estáticos
FROM nginx:alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/share/nginx/html

# Copiar los archivos HTML y CSS al directorio de trabajo en el contenedor
COPY index.html .
COPY style.css .

# Exponer el puerto 80 para acceder al sitio web
EXPOSE 3000

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
