@echo off
cd /d "%~dp0build\dist\js\productionExecutable"
start http://localhost:8007
http-server -p 8007
pause