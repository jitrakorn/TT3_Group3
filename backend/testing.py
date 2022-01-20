import requests
import json
BASE = "http://127.0.0.1:5000/"


# response = requests.get(BASE + "getLikes")
# print(response.json())
# input()
response = requests.get(BASE + "deleteComments/2")
# print(response.json())
# input()
# response = requests.get(BASE + "getComments")
# print(response.json())
