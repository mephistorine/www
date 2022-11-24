echo "Удаляем директорию"
rm -rf mephi-site || true

echo "Клонируем проект"
git clone https://github.com/mephistorine/www.git --depth 1 mephi-site

echo "Копируем TSL сертификаты"
cp ./certi/custom.* ./mephi-site/misc/ssl

echo "Переходим в директорию с проектом"
cd mephi-site

echo "Останавливаем предыдущий контейнер"
docker kill mephisite

echo "Уничтожение контейнера"
docker rm mephisite --volumes

echo "Начинаем сборку"
docker build --tag mephisite .

echo "Запускаем контейнер"
docker run --detach --publish 80:80 --publish 443:443 --name mephisite mephisite
