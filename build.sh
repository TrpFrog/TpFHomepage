#!/bin/sh

cd notes
/opt/buildhome/python3.7/bin/python3.7 -m pip install markdown
/opt/buildhome/python3.7/bin/python3.7 -m pip install beautifulsoup4
/opt/buildhome/python3.7/bin/python3.7 notes_builder.py
