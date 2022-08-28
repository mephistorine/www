docker stop mephi-site
docker build -t mephi-site
docker run -d -p 80:80 -p 443:443 -t mephi-site