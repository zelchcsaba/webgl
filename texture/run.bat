@echo off
cd /d "%~dp0build\dist\js\productionExecutable"
start http://localhost:8005
http-server -p 8005
pause