@echo off
cd /d "%~dp0build\dist\js\productionExecutable"
start http://localhost:8002
http-server -p 8002
pause