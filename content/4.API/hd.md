# 4K Enhencer API 

1. Login in https://deepfashion.us
2. Go to https://deepfashion.us/studio， Marketplace， click **FaceSwap** to add to your studio.
3. Click to enter into **FaceSwap** , get your `projectId` from the link

  > For example：https://deepfashion.us/studio/clu0wzh5w0003oq0q65eo1rn1，
  > projectId = clu0wzh5w0003oq0q65eo1rn1

4. Switch to https://deepfashion.us/platform， gnerated a token
5. Use the API: 

- Send a request

```bash
curl -X POST \
  'https://deepfashion.us/api/ai/hd' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ${token}' \
  -d '{
        "projectId": ${projectId},
        "shotId": "",
        "image": "https://www.www.com/coat.png",
        "scale": 2,
        "face_enhance":true 
      }'

{"output":{"id":shotID,"status":"starting","createdAt":"2024-06-03T05:01:51.314Z","updatedAt":"2024-06-03T05:01:51.314Z","outputUrl":null}}%  
```

- Get a request

```bash
curl -X GET \
  'https://deepfashion.us/api/ai/hd' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer ${Toekn}' \
  -d '{
        "shotId": ${shotID}
      }'


{"output":{"id":${shotID},"status":"succeeded","createdAt":"2024-05-24T02:09:51.254Z","updatedAt":"2024-05-24T02:15:47.402Z","outputUrl":"https://dddd.webp"}}%  
```

