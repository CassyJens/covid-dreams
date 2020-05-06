.PHONY: deploy local

deploy:
	npm build
	firebase deploy

local:
	firebase emulators:exec --only functions,database "npm start"