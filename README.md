![CI](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/actions/workflows/ci.yml/badge.svg)




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

# Solucion ✅

Verificar que los archivos esten en la carpeta correcta

- cd /var/www/Encriptador-app-JavaScrip-ec2
-  ls


 ![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/4d2871d4174af3d28a4f4ff2c6ec1f25e8e707f3/Captura%20de%20pantalla%202025-08-24%20193105.png)

Ahora 

# Paso 1: Edita la configuración de Nginx

Abre el archivo de configuración:

- sudo nano /etc/nginx/sites-available/default

Reemplazamos por 👇


 ![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/bbdc89a8cc5c3962d19130c72716fae09c229f50/Captura%20de%20pantalla%202025-08-24%20193542.png)


 # Reinicia Nginx

 ![Texto alternativo](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/blob/e35ce8bee6a95fc3a9ba205c8583b0c218a48e2d/Captura%20de%20pantalla%202025-08-24%20193600.png)

# 🔐 Encriptador App

Esta aplicación web permite **encriptar y desencriptar texto** utilizando reglas simples de sustitución de vocales.  
Está desarrollada en **HTML, CSS y JavaScript** y desplegada en **AWS EC2 con Nginx**.

---

## 🚀 Automatización con GitHub Actions

![CI](https://github.com/Yu-vadiaz/Encriptador-app-JavaScrip-ec2/actions/workflows/ci.yml/badge.svg)

Este proyecto ahora cuenta con **integración continua (CI)** gracias a GitHub Actions.  
Cada vez que realizo un `push` a la rama **master**, se ejecuta un workflow que:

1. Descarga el código del repositorio.  
2. Instala dependencias de Node.js (Jest, jsdom).  
3. Ejecuta **tests automáticos** para validar que el encriptador funciona correctamente.  

### ✅ Validaciones incluidas
- Operaciones de **encriptado** (`hola → hoberlai`).  
- Operaciones de **desencriptado** (`hoberlai → hola`).  
- Verificación de que al encriptar y luego desencriptar un texto, el resultado sea el **original**.  
- Comprobación de que el archivo `index.html` existe en el proyecto.  

De esta manera, garantizo que la aplicación siempre esté en buen estado antes de actualizarla o desplegarla.

---

## 📂 Estructura del repositorio
Encriptador-app-JavaScrip-ec2/

├── index.html

├── style.css

├── script.js

├── package.json

├── tests/

│ ├── basic.test.js

│ └── encrypt.test.js

└── .github/

└── workflows/

└── ci.yml



---

## 🧪 Automatización con GitHub Actions

Este proyecto ahora cuenta con un flujo de **Integración Continua (CI)** configurado en `.github/workflows/ci.yml`.

### 🔹 ¿Qué hace el workflow?
1. Se ejecuta en cada `push` a la rama **master**.  
2. Instala dependencias de Node.js (Jest, jsdom).  
3. Corre pruebas automáticas (`npm test`) para validar el encriptador.  
4. Actualiza el badge en este `README.md`.  

### 🔹 Validaciones implementadas
- ✅ Encriptar texto: `"hola"` → `"hoberlai"`.  
- ✅ Desencriptar texto: `"hoberlai"` → `"hola"`.  
- ✅ Confirmar que al encriptar y luego desencriptar se obtiene el texto original.  
- ✅ Comprobar que el archivo `índice.html` existe en el proyecto.  

---

## 📸 Evidencias del Workflow

- Ejecuciones visibles en la pestaña **Actions** del repositorio.  
- Capturas de pantalla mostrando:  
  - Badge en verde ✅.  
  - Logs de ejecución de los tests en GitHub Actions.  

---

## 📖 Beneficios de la Automatización

- 🔍 **Detección temprana de errores**: si la lógica del encriptador falla, el workflow lo detecta al instante.  
- ♻️ **Validación continua**: cada cambio al repositorio pasa por pruebas automáticas.  
- 📊 **Transparencia**: el badge permite saber el estado actual del proyecto sin revisar manualmente.  
- 💡 **Mantenibilidad**: facilita el trabajo colaborativo y evita subir cambios que rompan la app.  

---

## 🎥 Presentación (para el video)

En el video de entrega se mostrará:  
1. El repositorio en GitHub con el **badge funcionando**.  
2. La pestaña **Actions** ejecutando el workflow.  
3. Los tests automáticos pasando correctamente.  
4. Una breve explicación de los beneficios de la automatización aplicada al encriptador.  

---

## 📌 Conclusión

Con esta actividad logré implementar **automatización básica** en mi proyecto:  
- Configuré un workflow en GitHub Actions.  
- Agregué tests automáticos con Jest para validar la funcionalidad del encriptador.  
- Actualicé el `README.md` con un badge de estado y documentación clara.  

✅ Esto cumple con los criterios de implementación, mejoras al repositorio, documentación de calidad y demostración del funcionamiento.












































