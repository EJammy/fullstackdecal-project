from bs4 import BeautifulSoup
import requests
import re
import json
url ="https://classes.berkeley.edu/search/class/?f%5B0%5D=im_field_term_name%3A2870"
result= requests.get(url)
doc= BeautifulSoup(result.text,"html.parser")
classID = doc.find_all(class_="search-result")

def extract_course_info(phrase):
    pattern = r'"displayName":"((?:[A-Z]+\s+)*[A-Z]+(?:\s*\d+[A-Z]?|[A-Z]\d+))"'
    match = re.search(pattern, phrase)
    if match:
        return match.group(1)
    else:
        pattern = r'(\b[A-Z]+\s*\d+\b)'
        match = re.search(pattern, phrase)
        if match:
            return match.group(1)
        else:
            return None
courseList = {}
def nextPageFinder(doc):
    if doc is None:
        return None
    if doc.find('li',class_="pager-next"):
        newUrl= "https://classes.berkeley.edu" + doc.find('li',class_="pager-next").find('a')['href']
        return newUrl
    else:
        return None
    
def extractTitle(phrase):
    course_name_pattern = r'title":"([^"]+)'
    match = re.search(course_name_pattern, phrase)
    if match:
        course_name = match.group(1)
        return course_name

while url!= None:
    for id in classID:
        stringID = str(id)
        newID = extract_course_info(stringID)
        title  = extractTitle(stringID)
        if newID not in courseList:
            courseList[newID] = title
    if nextPageFinder(doc)== None:
        break
    url = nextPageFinder(doc)
    result= requests.get(url)
    doc= BeautifulSoup(result.text,"html.parser")
    classID = doc.find_all(class_="search-result")
    
with open('courseList.json', 'w') as f:
   json.dump(courseList, f)