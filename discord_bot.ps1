Set-Location D:\Desktop\source_code\GitHub\discord_bot\blank_files

$ValueList='Beep','Boop',"Obi-Wan, you're my only hope",'Prepare to be terminated','ZZzzzZZzZzzzZZTttTTt','kablamo','pew pew','vvvvt vrrrr whiiiiir','powering up'

New-Item -Name "$(Get-Date -Format "MM-dd-yyyy_hh-mm-ss.fff")" -Value "$(Get-Random -InputObject $ValueList)" -Path D:\Desktop\source_code\GitHub\discord_bot\blank_files

git fetch
git add .
git commit -m "blank update"
git push