# -*- coding: utf-8 -*-
import os
import markdown
from bs4 import BeautifulSoup

blog_template: str
list_template: str

def make_toppage():
    html = '<ul>'
    for folder in os.listdir('.'):
        if os.path.isfile(folder) or folder.startswith('_'):
            continue
        html += '<li>'
        html += f'<a href="./{folder}/index.html">{folder}</a>'
        html += '</li>'
    html += '</ul>'

    with open('index.html', 'w') as f:
        f.write(list_template.replace('$(content)', html))

def make_blogpage(md: markdown.Markdown, file_name: str):

    html = blog_template
    
    with open(f'{file_name}/index.html', 'w') as f:
        with open(f'{file_name}/{file_name}.md', 'r') as f_md:
            content = md.convert(f_md.read())
            soup = BeautifulSoup(content, "html.parser")
            content = '\n'.join(content.split('\n')[1:])
            
            html = html.replace('$(title)', soup.find('h1').text)
            html = html.replace('$(description)', '')
            html = html.replace('$(content)', content)
            
            f.write(html)

if __name__ == '__main__':
    folders = os.listdir('.')
    md = markdown.Markdown()
    
    with open('./_template/blog.html') as f:
        blog_template = f.read()
    
    with open('./_template/list.html') as f:
        list_template = f.read()
    
    make_toppage()
    for folder in folders:
        if os.path.isfile(folder) or folder.startswith('_'):
            continue
        make_blogpage(md, folder)
