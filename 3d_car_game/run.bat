@echo off
cd /d "%~dp0build\dist\js\productionExecutable"
start http://localhost:8000
http-server -p 8000
pause