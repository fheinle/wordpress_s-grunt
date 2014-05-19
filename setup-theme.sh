#!/bin/bash

if [ -z "$1" ]
then
    echo "Please specify theme name" >&2
    exit 1
fi

NEWNAME=$1

echo "Installing node modules"
npm install

echo "Renaming theme to $NEWNAME"
find dist/ -type f -name "*php" -exec sed -i -e "s/THEMENAME/$NEWNAME/g" {} +
sed -i -e "s/THEMENAME/$NEWNAME/g" package.json
sed -i -e "s/THEMENAME/$NEWNAME/g" dev/scss/style.scss
sed -i -e "s/THEMENAME/$NEWNAME/g" Gruntfile.js
git mv dist/THEMENAME dist/$NEWNAME

echo "First grunt run"
grunt

echo "Adding theme configuration to git"
git add dist/ Gruntfile.js dev/scss/style.scss package.json
git commit
