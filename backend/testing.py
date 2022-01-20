import requests
import json
BASE = "http://127.0.0.1:3306/"


response = requests.get(BASE + "getLikes")
print(response.json())
input()
response = requests.get(BASE + "getPost")
print(response.json())
input()
response = requests.get(BASE + "getComments")
print(response.json())
