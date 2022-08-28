echo "Останавливаем предыдущий контейнер"
docker stop mephi-site

echo "Копируем TSL сертификаты"
cp ./certi/custom.* ./mephi-site/misc/ssl

echo "Переходим в директорию с проектом"
cd mephi-site

echo "Подтягиваем последние изменения"
git pull --all

echo "Начинаем сборку"
docker build -t mephi-site .

echo "Запускаем контейнер"
docker run -d -p 80:80 -p 443:443 -t mephi-site
