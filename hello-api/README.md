this api communicates to a couch db server through `http://cdb:5984`

run couch: `docker run -d -p 5984 --name couchdb couchdb`
build api: `docker build -t hello-api .`
run api: `docker run -it --rm -p 8199 --link couchdb:cdb hello-api`

