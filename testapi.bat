@echo off

cd Backend
start /B npm start

cd..

cd Frontend/testapi
start /B npm run dev
