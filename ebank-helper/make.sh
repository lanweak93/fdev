#!/bin/bash
tag=$1

rm -rf fdev-helper*.tar.gz
docker build . -t 10.112.13.156:9999/library/fdev-helper:$tag
docker save 10.112.13.156:9999/library/fdev-helper:$tag -o fdev-helper-$tag.tar
gzip fdev-helper-$tag.tar
git add .
git commit -m ""$tag
git push origin master