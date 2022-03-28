from copy import copy
from flask import Flask
from flask_cors import CORS, cross_origin
from flask import request
import json
import regex
import numpy as np


userAccount = json.load(open("./userAccount.json", "r", encoding="utf8"))
products = json.load(open("./products.json", "r", encoding="utf8"))
productsType = ['iphone', 'samsung', 'oppo', 'xiaomi', 'huawei', 'realme']

app = Flask(__name__)
CORS(app)

def checkLogin(email, password):
  for account in userAccount['account']:
    if account['email'] == email:
      if account['password'] == password:
        return True, account
  return False, {}
def checkRegistry(email, password):
  for account in userAccount['account']:
    if account['email'] == email:
      return False, {}
  account = {
    "name": email.split('@')[0],
    "email": email,
    "password": password,
    "phoneNumber": "",
    "address": ""
  }
  userAccount['account'].append(account)
  json_object = json.dumps(userAccount)
  with open("userAccount.json", "w") as outfile:
    outfile.write(json_object)
  return True, account

@app.route('/registry', methods=['POST'])
@cross_origin(origin='*')
def process_registry():
  if request.method == 'POST':
    email = request.form['email']
    password = request.form['password']

    isRegistry, account = checkRegistry(email, password)
    if isRegistry:
      return {
        'checkedLogin': '1',
        'account': account
      }
    return{
      'checkedLogin': '0'
    }


@app.route('/login', methods=['POST'])
@cross_origin(origin='*')
def process_login():
  if request.method == 'POST':
    email = request.form['email']
    password = request.form['password']
    isLogin, account = checkLogin(email, password)
    if isLogin:
      return {
        'checkedLogin': '1',
        'account': account
      }
    return {
      'checkedLogin': '0'
    }
  return None
@app.route('/logout', methods=['POST'])
@cross_origin(origin='*')
def process_logout():
  if request.method == 'POST':
    return {
      'isAuth': '1'
    }
  return None



def search(keyword):
  keywords = regex.findall(r'(?i)\b\p{L}+\b', keyword.lower())
  productsSearched = []

  for type in productsType:
      for x in products[type]:
          title = regex.findall(r'(?i)\b\p{L}+\b', x["title"].lower())
          for key in keywords:
              if key in title:
                x["type"] = type;
                productsSearched.append(x)
                break
  return productsSearched

@app.route('/search', methods=['POST'])
@cross_origin(origin='*')
def process_search():
  if request.method == 'POST':
    keyword = request.form['keyWord']
    searched = search(keyword=keyword)
  return {
          'productsSearch': searched
          }


def handlePrice(price):
  p = price.split('.')
  p = ''.join(p)
  return int(p)
@app.route('/sort-products', methods=['POST'])
@cross_origin(origins='*')
def process_sort():
  if request.method == 'POST':
    filter = request.form['filter']
    type = request.form['type']

    array = products[type].copy()

    if filter == '1':
      return {
        'result': products[type]
      }
    elif filter == '2':
      for i in range(len(array)-1):
        for j in range(i+1, len(array)):
          p1 = handlePrice(array[i]['saleOffPrice'])
          p2 = handlePrice(array[j]['saleOffPrice'])
          if p1 > p2:  
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
      return {
        'result': array
      }
    else:
      for i in range(len(array)-1):
        for j in range(i+1, len(array)):
          p1 = handlePrice(array[i]['saleOffPrice'])
          p2 = handlePrice(array[j]['saleOffPrice'])
          if p1 < p2: 
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
      return {
        'result': array
      }

@app.route('/request-data', methods=['GET'])
@cross_origin(origin='*')
def index():
  return {
          'products': products,
          'productsType': productsType,
          }

if __name__ == '__main__':
  app.run()
