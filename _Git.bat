@echo off
:: Git.bat WILMER MUNOZ 
:: wilmer.munoz@correounivalle.edu.co 
echo.
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo +++++++++++++++(Pull, Commit, Push)+++++++++++++++
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo.
echo.
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo ++++++++++++++++++++++ Pull ++++++++++++++++++++++
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo.
git pull
echo.
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo ++++++++++++++++++++++ Commit ++++++++++++++++++++
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo.
SET /P arg1= .  Definir comentario :
git add .
git commit -a -m "%arg1%"
echo.
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo ++++++++++++++++++++++ push ++++++++++++++++++++++
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo.
git push
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
echo ++++++++++++++++++ Finalizado!! ++++++++++++++++++
echo ++++++++++++++++++++++++++++++++++++++++++++++++++
pause