#!/bin/bash
cd ../..
rm -rf ./dist
npm run build
cd ./test-apps/package-test
rm -rf ./node_modules/@econte-sprig
npm link ../../dist/modules/core
npm link ../../dist/modules/key-logger
npm link ../../dist/modules/mouse-logger
