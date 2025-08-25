![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/3413929b269b5e4a7b233ed17c8aac3755f3e09c/Captura%20de%20pantalla%202025-08-24%20183146.png)

 # ENCRIPTADOR
 Este proyecto es un encriptador y desencriptador de texto implementado en HTML, CSS y JavaScript.
La interfaz está diseñada con una paleta de colores palo de rosa, lo que le da un aspecto moderno, elegante y amigable.

El encriptador utiliza un cifrado César, donde cada letra se desplaza un número determinado de posiciones en el alfabeto.
El usuario puede seleccionar el número de desplazamientos, escribir un texto y obtener su versión encriptada o desencriptada.

# 👩‍💻 Tecnologías Utilizadas

HTML → estructura del proyecto

CSS → diseño de la pagina con colores rosas

JavaScript→ lógica del encriptador (cifrado César)

# 📖 Funcionamiento del Cifrado César

El algoritmo reemplaza cada letra por otra que se encuentra n posiciones más adelante en el alfabeto.
Ejemplo con desplazamiento 3:

Texto original: HOLA

Texto encriptado: KROD

Si se selecciona Desencriptar, se realiza el proceso inverso.

🔎 Importante: Solo se encriptan letras A-Z (sin ñ). Los números, espacios y símbolos permanecen iguales.
# Paso1
-Ingresar a AWS Console  ,ec2,Instances
-Crear y seleccionar tu instancia.
-Click en "Connect"

# Paso 2: Preparar el Entorno 
Actualizamos el sistema e instalamos dependecias 
- sudo apt update && sudo apt upgrade -y
- sudo apt install nginx -y

  
Verificacion de nginx


![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/b0ef89390700c7d1486280ebe181c3f7fafc0fc2/Captura%20de%20pantalla%202025-08-24%20185027.png)



![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/f27675072bebb5149d103dea10a906cacc4273b3/Captura%20de%20pantalla%202025-08-24%20185114.png)

# Paso 3: Clonar la aplicacion

- cd /var/www
- sudo git clone https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2.git

# Paso 4: Configurar Nginx para tu app

- sudo nano /etc/nginx/sites-available/default

Reemplaza el contenido con:

![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/9071dedb85d3bffe7f61373e74756b3d2532c19f/Captura%20de%20pantalla%202025-08-24%20191217.png)


# Paso 5: Reiniciar Nginx

- sudo systemctl restart nginx

# Paso 6: Probar en navegador 

Abrir desde AWS ec2


![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/3a7a5864053018c0e24f557513bf2836b3f9c2f1/Captura%20de%20pantalla%202025-08-24%20191626.png)

# Errores encontrados ‼️

La primera vez que se probo en el navegador me aparecio esto en la pagina 

![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/cca88e0f8d59933e2a7f5527398b2404dedf25ff/Captura%20de%20pantalla%202025-08-24%20163239.png)


Es la página por defecto que viene con Nginx, lo cual indica que aún no has apuntado Nginx hacia tu aplicación HTML/CSS/JS.

# Soluccion ✅

Verificar que los archivos esten en la carpeta correcta

- cd /var/www/Encriptador-app-JavaScrip-ec2
- ls


 ![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/cca88e0f8d59933e2a7f5527398b2404dedf25ff/Captura%20de%20pantalla%202025-08-24%20163239.png)

Ahora 

# Paso 1: Edita la configuración de Nginx

Abre el archivo de configuración:

- sudo nano /etc/nginx/sites-available/default

Reemplazamos por 👇




server {
    listen 80;
    server_name _;

    root /var/www/Encriptador-app-JavaScrip-ec2;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
































