import requests
import json
BASE = "http://127.0.0.1:5000/"
data = [{"Post_Title": "test", "Post_Description": "hello", "Post_Image": "test"}, ]

for i in range(21, len(data)+21):
    response = requests.post(
        BASE + "insertPost/"+"tim", data[i-21])
    print(response.json())
print(response.json())
