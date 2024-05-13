A test of my proposed modular packaging style for the sdk. Has four modules, core, click-logger, key-logger and mouse-logger. Each just log to the console when users execute certain actions on the attached HTML element.

In order to run.
1. npm i
2. npm run build
3. cd test-apps/module-test or cd test-apps/package-test
4. npm run start
5. Open the console and click around, move your mouse and so on. It should also log which modules were registered
