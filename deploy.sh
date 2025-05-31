date=$(date '+%Y-%m-%d-%H-%M')

echo "creating docker image"
docker build -t charlicoder .

### Complete Deployment
echo "killing the running docker"
docker ps -a | egrep 'charlicoder' | awk '{print $1}'| xargs docker kill
docker ps -a | egrep 'charlicoder' | awk '{print $1}'| xargs docker rm


echo "running the charlicoder using docker"
docker run -d --restart=unless-stopped --name charlicoder -p 4000:4000 charlicoder

echo "We are done !"