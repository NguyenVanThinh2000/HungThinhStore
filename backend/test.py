from numpy import arange
import regex

a = "Điện Thoại Di Động iPhone 12 mini 64GB Black MGDX3VN/A"

b = "iphone 12 mini"

array = regex.findall(r'(?i)\b\p{L}+\b', a.lower())
arr = regex.findall(r'(?i)\b\p{L}+\b', b.lower())


for w in arr:
    if w in array:
        print(1)