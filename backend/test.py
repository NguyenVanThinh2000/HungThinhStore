from numpy import arange
import regex
import json


products = json.load(open("./products.json", "r", encoding="utf8"))
productsType = ['iphone', 'samsung', 'oppo', 'xiaomi', 'huawei', 'realme']

keyword = "mini"


keywords = regex.findall(r'(?i)\b\p{L}+\b', keyword.lower())

productsSearched = []

for type in productsType:
    for x in products[type]:
        title = regex.findall(r'(?i)\b\p{L}+\b', x["title"].lower())
        for key in keywords:
            if key in title:
                productsSearched.append(x)
                break

print(productsSearched)