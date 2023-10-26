import requests
import json

api_key = 'acc_fefccd701de2757'
api_secret = '654f29220a44100647e45d46eb8aa692'
image_url = 'https://s1.eestatic.com/2020/11/09/motor/motor_534707118_164722896_1706x1280.jpg'

response = requests.get(
    'https://api.imagga.com/v2/tags?image_url=%s&language=en&limit=5' % image_url,
    auth=(api_key, api_secret))

print(json.dumps(response.json()["result"], indent=4))











'''
response = requests.post(
    'https://api.imagga.com/v2/uploads?image_url=%s' % image_url,
    auth=(api_key, api_secret))

id = response.json()["result"]["upload_id"]
response = requests.get(
    'https://api.imagga.com/v2/tags?image_upload_id=%s&language=en&limit=5' % id,
    auth=(api_key, api_secret))

'''