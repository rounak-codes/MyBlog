@echo off
:: This script renames files in the current folder
:: Pattern: Removes "Portraits " and converts the rest to lowercase

echo Renaming files...

:: Switch to the directory where this script is located
cd /d "%~dp0"

:: Run PowerShell command to find files starting with "Portraits", remove the prefix, and lowercase the name
powershell -Command "Get-ChildItem 'Portraits *' | ForEach-Object { $newName = ($_.Name -replace '^Portraits\s*', '').ToLower(); Write-Host 'Renaming' $_.Name 'to' $newName; Rename-Item -Path $_.FullName -NewName $newName }"

echo.
echo Done!
pause