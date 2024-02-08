# hw-unit-integration-test
Here is an instruction on installing all dependecies to make project work. As well as on running test.

Once the reposotory is cloned on your local machine and respective directory is pointed at in IDE's termninal, run:

Run following commands:
yarn init
yarn add --dev jest
yarn create jest@latest
yarn add --dev babel-jest @babel/core @babel/preset-env 

It is important to install Babel dependecy to make Jest "understand" modern syntax (in project's scope - export/import)

Once all dependecies are succesfully installed, you can run following command to execute test:
yarn test

It is expected that Jest "understands" import statement and all test are passed (green).