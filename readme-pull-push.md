Proyecto oficial de la página web de Emphasys.

Este repositorio se utiliza para trabajar de manera sincronizada entre distintas máquinas (Mac y PC). El flujo es simple y debe mantenerse disciplinado para evitar conflictos.

Para clonar el proyecto por primera vez, ubicarse en la carpeta donde se quiera descargar y ejecutar:

git clone https://github.com/EmphaticoOnline/emphasys-web.git

cd emphasys-web
npm install

**Si el proyecto ya está clonado y se va a comenzar a trabajar, siempre ejecutar primero:**

git pull

Esto asegura que la máquina tenga la versión más reciente del repositorio remoto antes de hacer cualquier cambio.

**Después de realizar cambios en el proyecto, el flujo para subirlos es el siguiente:**

git add .
git commit -m "Mensaje claro describiendo el cambio realizado"
git push

Es muy importante mantener este orden: primero pull antes de trabajar, y push después de terminar.

El archivo .env no se sube al repositorio (está ignorado en .gitignore). Si se trabaja en una máquina nueva, se debe crear manualmente el archivo .env correspondiente para esa máquina.

Regla de oro del proyecto: Pull antes de trabajar. Push después de trabajar.