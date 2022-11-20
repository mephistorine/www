echo "Останавливаем предыдущий контейнер"
docker stop mephisite

echo "Уничтожение контейнера"
docker rm mephisite

echo "Копируем TSL сертификаты"
cp ./certi/custom.* ./mephi-site/misc/ssl

echo "Переходим в директорию с проектом"
cd mephi-site

echo "Подтягиваем последние изменения"
git pull --all

echo "Начинаем сборку"
docker build -t mephisite .

echo "Запускаем контейнер"
docker run -d -p 80:80 -p 443:443 mephisite
