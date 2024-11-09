#!/bin/bash

rsync -avr -e "ssh -l ansible"\
  --exclude '.git'\
  --exclude '.gitignore'\
  --exclude '.idea'\
  --exclude 'node_modules'\
  --exclude 'upload.sh'\
  ./ falkzach.net:/home/ansible/portfolio24
