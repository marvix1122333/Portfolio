$text = Get-Content 'C:\Users\pc\Downloads\Portfolio\index.html' -Raw
$opens = [regex]::Matches($text, '<div[\s>]')
$closes = [regex]::Matches($text, '</div>')
Write-Host "Opens: $($opens.Count) Closes: $($closes.Count)"
