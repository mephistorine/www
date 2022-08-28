docker stop mephi-site

cp ./certi/custom.* ./mephi-site/misc/ssl

cd mephi-site

git pull --all

docker build -t mephi-site .
docker run -d -p 80:80 -p 443:443 -t mephi-site
