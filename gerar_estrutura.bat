@echo off
setlocal

:: Caminho da pasta do projeto no XAMPP
set PASTA_ANALISADA=C:\Projetos\h2d-landing-page

:: Caminho de destino (salvar dentro da própria pasta do projeto)
set PASTA_DESTINO=%PASTA_ANALISADA%

:: Gera data e hora para nome do arquivo
for /f "tokens=1-4 delims=/ " %%a in ('date /t') do (
    set ANO=%%d
    set MES=%%b
    set DIA=%%c
)
for /f "tokens=1-2 delims=: " %%a in ('time /t') do (
    set HORA=%%a
    set MINUTO=%%b
)

:: Corrige formatação
set HORA=%HORA::=%
set MINUTO=%MINUTO::=%
set NOME_ARQUIVO=estrutura_%ANO%-%MES%-%DIA%_%HORA%-%MINUTO%.txt

:: Caminho final do arquivo
set DESTINO=%PASTA_DESTINO%\%NOME_ARQUIVO%

:: Gera a estrutura da pasta informada
tree "%PASTA_ANALISADA%" /f > "%DESTINO%"

:: Mensagem final
echo.
echo Estrutura da pasta %PASTA_ANALISADA% salva em:
echo %DESTINO%
pause
