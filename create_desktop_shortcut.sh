#!/bin/sh

echo '[Desktop Entry]
Encoding=UTF-8
Name=Microsoft Teams
Exec="'$(pwd)'/Microsoft Teams"
Icon='$(pwd)'/resources/app/favicon-9c67d4dc.ico
Terminal=false
Type=Application
Categories=Network' > ~/.local/share/applications/MicrosoftTeams.desktop

