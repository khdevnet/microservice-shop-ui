#!/bin/bash
npm run-script build
cp ./Dockerfile ./dist/
cp ./nginx.conf ./dist/