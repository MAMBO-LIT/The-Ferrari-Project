$ErrorActionPreference = "Stop"
try {
    if (-not (Test-Path "public/images")) { New-Item -ItemType Directory -Force -Path "public/images" | Out-Null }
    if (-not (Test-Path "public/images/laFerrari-sequence")) { New-Item -ItemType Directory -Force -Path "public/images/laFerrari-sequence" | Out-Null }
    
    if (Test-Path "ferrari frames") {
        Get-ChildItem "ferrari frames" -Filter "*.jpg" | ForEach-Object {
            if ($_.Name -match "frame-(\d+)") {
                $num = [int]$matches[1]
                Copy-Item $_.FullName -Destination "public/images/laFerrari-sequence\$num.jpg" -Force
            }
        }
        Remove-Item "ferrari frames" -Force -Recurse
    }
    if (Test-Path "temp_app") { Remove-Item "temp_app" -Force -Recurse }
    Write-Host "Assets setup complete."
} catch {
    Write-Host "Error: $_"
    exit 1
}
