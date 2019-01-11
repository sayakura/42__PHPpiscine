from __future__ import print_function
import sys
import re

def to_upper_title(match):
	return match.group(1) + match.group(2).upper() + match.group(3)
def to_upper_text(match):
	return match.group(0).upper()

def do_title_and_text(match):
	r = re.compile(r"(title=\")(.*?)(\")", re.MULTILINE)
	string = r.sub(to_upper_title, match.group(0))
	r = re.compile(r">(.*?)<", re.MULTILINE)
	string = r.sub(to_upper_text, string)
	return string

if len(sys.argv) != 2:
	print("Aguments not equal to 2")
	exit(0)
f =  open(sys.argv[1], 'r')
text = f.read()

r = re.compile(r"<a.*?>.*?<\/a>", re.MULTILINE)
string = r.sub(do_title_and_text, text)
print(string, end='')