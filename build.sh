#!/bin/sh

python3 -m pip install markdown
python3 -m pip install beautifulsoup4

cd notes
python3 notes_builder.py
