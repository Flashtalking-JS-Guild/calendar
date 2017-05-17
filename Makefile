install:
	npm install

test:
	./node_modules/.bin/jest

build:
	./node_modules/.bin/webpack
	./node_modules/.bin/babel src/server/app/ -d src/server/dist
	rm -rf ./dist
	mkdir -p dist
	cp -R src/client/dist dist/public 
	cp -R src/server/dist dist/app
	cp -R src/server/views dist/views

start:
	node ./dist/app/index.js
