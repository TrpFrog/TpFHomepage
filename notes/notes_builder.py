# -*- coding: utf-8 -*-
import os
import shutil
import markdown
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
        tags = list(map(lambda s: s.strip().replace(' ', ''), l[3].split(',')))
        description = '\n'.join(l[4:]).strip()
    return title, description, tags, written_on, last_modified


def build_toppage():
    fragments = []
    all_tags_set = set()

    for folder in os.listdir('.'):
        if os.path.isfile(folder) or folder.startswith('_'):
            continue

        title, description, tags, written_on, last_modified = read_info(folder) 

        fragment = list_fragment
        fragment = fragment.replace('$(icon)', 'trpfrog')

        # Date
        fragment = fragment.replace('$(written_date)', datetime.strftime(written_on, '%Y年%m月%d日'))  
        fragment = fragment.replace('$(last_modified)', datetime.strftime(last_modified, '%Y年%m月%d日'))
        fragment = fragment.replace('$(written_unixtime)', datetime.strftime(written_on, '%s000'))  
        fragment = fragment.replace('$(last_modified_unixtime)', datetime.strftime(last_modified, '%s000'))

        # Tags
        tag_str = ''
        tag_classes_str = ''
        for t in tags:
            all_tags_set.add(t)
            tag_str += f'<span class="article_tag">{t}</span>'
            tag_classes_str += 'tag_' + t + ' '
        fragment = fragment.replace('$(tags)', tag_str)
        fragment = fragment.replace('$(tag_classes)', tag_classes_str[:-1])

        # Title link
        fragment = fragment.replace('$(folder_name)', folder)
        fragment = fragment.replace('$(title)', title)

        # Description
        if description == 'none': description = ''
        fragment = fragment.replace('$(description)', description)

        fragments.append((written_on, fragment))

    fragments.sort(key=lambda x: x[0], reverse=True)


    tag_list_html = ''

    all_tags = []
    for t in all_tags_set:
        all_tags.append(t)
    all_tags.sort()

    for t in all_tags:
        tag_list_html += f'<span class="tag_button tag_btn_{t}" onclick="showTag(\'{t}\')">{t}</span>'
    
    html = ''
    for written_on, fragment in fragments:
        html += fragment + '\n'
        
    with open('index.html', 'w') as f:
        f.write(list_template.replace('$(content)', html).replace('$(tags)', tag_list_html))


def build_blogpage(md: markdown.Markdown, folder_name: str):
    html = blog_template

    if not os.path.exists(f'./{folder_name}/thumbnail.webp'):
        shutil.copyfile("./default_thumbnail.webp", f"./{folder_name}/thumbnail.webp")

    with open(f'{folder_name}/index.html', 'w') as f:
        title, description, tags, written_on, last_modified = read_info(folder_name) 

        # Date
        html = html.replace('$(written_date)', datetime.strftime(written_on, '%Y年%m月%d日'))  
        html = html.replace('$(last_modified)', datetime.strftime(last_modified, '%Y年%m月%d日'))

        html = html.replace('$(folder_name)', folder_name)
        html = html.replace('$(description)', description)

        # Tags
        tag_str = ''
        for t in tags:
            tag_str += f'<span class="article_tag">{t}</span>'
        html = html.replace('$(tags)', tag_str)

        # Contents
        with open(f'{folder_name}/index.md', 'r') as f_md:
            content = md.convert(f_md.read())
            soup = BeautifulSoup(content, "html.parser")
            content = '\n'.join(content.split('\n')[1:])
            
            html = html.replace('$(title)', soup.find('h1').text)
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
    
    build_toppage()
    for folder in folders:
        if os.path.isfile(folder) or folder.startswith('_'):
            continue
        build_blogpage(md, folder)
