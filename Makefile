setup:
	rm -rf node_modules && yarn install

dev:
	yarn dev
ios:
	yarn ios
android:
	yarn android