echo "Останавливаем предыдущий контейнер"
docker kill mephi-site

echo "Уничтожение контейнера"
docker rm mephi-site

echo "Копируем TSL сертификаты"
cp ./certi/custom.* ./mephi-site/misc/ssl

echo "Переходим в директорию с проектом"
cd mephi-site

echo "Подтягиваем последние изменения"
git pull --all

echo "Начинаем сборку"
docker build -t mephi-site .

echo "Запускаем контейнер"
docker run --name mephi-site -d -p 80:80 -p 443:443
