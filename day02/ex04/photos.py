import urllib2
import sys
import re
import requests

if len(sys.argv) != 2:
	print("Bro, no parameter.")
	exit(0)

url = sys.argv[1]
response = urllib2.urlopen(url)
webContent = response.read()

match = re.findall(r'img src="(.*?)"', webContent)
for m in match:
	temp = m
	index = m.rfind('/')
	filename = m[index + 1:]
	f = open(filename,'wb')
	if m.find("http") == -1:
		temp = url + m
	f.write(requests.get(temp).content)
	f.close()