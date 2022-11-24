echo "Удаляем директорию"
rm -rf mephi-site || true

echo "Клонируем проект"
git clone https://github.com/mephistorine/www.git --depth 1 mephi-site

echo "Копируем TSL сертификаты"
cp ./certi/custom.* ./mephi-site/misc/ssl

echo "Переходим в директорию с проектом"
cd mephi-site

echo "Останавливаем предыдущий контейнер"
docker kill mephi

echo "Уничтожение контейнера"
docker rm mephi --volumes

echo "Начинаем сборку"
docker build --tag mephi .

echo "Запускаем контейнер"
docker run --name mephi --publish 80:80 --publish 443:443 --detach mephi
