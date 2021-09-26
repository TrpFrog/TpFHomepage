#!/bin/sh

echo 'python-3.7.2' > runtime.txt
pip install markdown
pip install beautifulsoup4
cd notes
python notes_builder.py
