@echo off
chcp 65001 >nul
echo ========================================
echo   GD Arquitectura - Quick Start
echo ========================================
echo.

cd /d "D:\New Life\Web GD new\gd-arquitectura"
if errorlevel 1 (
    echo [ERROR] Could not change to gd-arquitectura directory
    echo Current directory: %CD%
    pause
    exit /b 1
)
echo Current directory: %CD%
echo.

if exist package.json (
    echo [OK] package.json found
    echo.

    echo [INFO] Cleaning up previous processes...
    taskkill /f /im node.exe >nul 2>&1
    timeout /t 1 /nobreak >nul

    echo [START] Starting Next.js development server...
    echo.
    echo [URL] Opening browser in 3 seconds...
    echo       http://localhost:3000
    echo.
    echo [INFO] Press Ctrl+C to stop the server
    echo ========================================
    echo.

    start http://localhost:3000
    timeout /t 3 /nobreak >nul
    npm run dev

) else (
    echo [ERROR] package.json not found!
    echo Current directory: %CD%
    echo.
    dir
    echo.
    echo Press any key to exit...
    pause >nul
)