@echo off
echo ========================================
echo   GD Arquitectura - Development Server
echo ========================================
echo.

cd /d "D:\New Life\Web GD new\gd-arquitectura"
echo Current directory: %CD%
echo.

if exist package.json (
    echo ✅ package.json found
    echo.

    echo 🔄 Checking Node.js processes...
    taskkill /f /im node.exe >nul 2>&1
    timeout /t 2 /nobreak >nul

    echo 🚀 Starting Next.js development server...
    echo URL: http://localhost:3000
    echo.
    echo Press Ctrl+C to stop the server
    echo ========================================
    echo.

    npx next dev

) else (
    echo ❌ ERROR: package.json not found!
    echo Current directory: %CD%
    echo.
    dir
    echo.
    echo Press any key to exit...
    pause >nul
)