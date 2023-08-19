## How to run

1. Install Docker
2. `docker-compose build`
3. `docker-compose up`
4. Open OBS and in settings set the server to `rtmp://localhost:1935/live` and the stream key to `test?key=supersecret`

    **IF YOU STREAM KEY IS DIFFERENT THAN "TEST" YOU WILL HAVE TO CHANGE THE INDEX.HTML FILE SO THAT IT LOOKS FOR {other-stream-key}.m3u8} (line 17)**
6. Open a browser and go to `http://localhost:8080` to view your live stream!
