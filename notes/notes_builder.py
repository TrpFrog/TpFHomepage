# -*- coding: utf-8 -*-
import os
import markdown
import random
from datetime import datetime
from bs4 import BeautifulSoup

blog_template: str
list_template: str
list_fragment: str

def read_info(folder_name: str):
    title: str
    description: str
    written_on: datetime
    last_modified: datetime
    filter_func = lambda s: not s.lstrip().startswith('# ') and s.strip() != ''
    with open(f'{folder_name}/info.txt', 'r') as f:
        l = f.readlines()
        l = list(filter(filter_func, l))
        title = l[0].strip()
        written_on = datetime.strptime(l[1].strip(), '%Y-%m-%d')
        last_modified = datetime.strptime(l[2].strip(), '%Y-%m-%d')
        description = '\n'.join(l[3:]).strip()
    return title, description, written_on, last_modified


def make_toppage():
    fragments = []

    for folder in os.listdir('.'):
        if os.path.isfile(folder) or folder.startswith('_'):
            continue
        title, description, written_on, last_modified = read_info(folder) 
        fragment = list_fragment
        fragment = fragment.replace('$(icon)', 'trpfrog')

        fragment = fragment.replace('$(written_date)', datetime.strftime(written_on, '%Y年%m月%d日'))  
        fragment = fragment.replace('$(last_modified)', datetime.strftime(last_modified, '%Y年%m月%d日'))
        fragment = fragment.replace('$(written_unixtime)', datetime.strftime(written_on, '%s000'))  
        fragment = fragment.replace('$(last_modified_unixtime)', datetime.strftime(last_modified, '%s000'))

        fragment = fragment.replace('$(folder_name)', folder)
        fragment = fragment.replace('$(title)', title)
        fragment = fragment.replace('$(description)', description)

        fragments.append((written_on, fragment))

    fragments.sort(key=lambda x: x[0], reverse=True)

    html = ''
    for written_on, fragment in fragments:
        html += fragment + '\n'
        
    with open('index.html', 'w') as f:
        f.write(list_template.replace('$(content)', html))


def make_blogpage(md: markdown.Markdown, file_name: str):
    html = blog_template
    with open(f'{file_name}/index.html', 'w') as f:
        with open(f'{file_name}/index.md', 'r') as f_md:
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

    with open('./_template/list_fragment.html') as f:
        list_fragment = f.read()
    
    make_toppage()
    for folder in folders:
        if os.path.isfile(folder) or folder.startswith('_'):
            continue
        make_blogpage(md, folder)
