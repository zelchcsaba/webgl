call gradlew build
call gradlew jsBrowserDevelopmentExecutableDistribution

tar -acvf %1_solution.zip build/web build/server/compileSync client common gradle server webglmath build.gradle.kts gradle.properties gradlew gradlew.bat kog.sublime-project kog.sublime-workspace settings.gradle.kts prepare_solution.bat run_server.bat