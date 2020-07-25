REM File that creates all configuration to code
node configurations.js
set /p num_of_users=<configurations/num_of_users
set /p progressive_load=<configurations/progressive_load
set /p progressive_load_timeout=<configurations/progressive_load_timeout
REM number of users loop
FOR /L %%A IN (1,1,%num_of_users%) DO (
    start cmd.exe /K node index.js
    REM maintain wait between concurrent user requests
    IF %progressive_load%==true (
        timeout /t %progressive_load_timeout% /nobreak
    )
)