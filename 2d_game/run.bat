@echo off
cd /d "%~dp0build\dist\js\productionExecutable"
start http://localhost:8001
http-server -p 8001
pause