## How to run

1. Install Docker
2. `docker-compose build`
3. `docker-compose up`
4. Open OBS and in settings set the server to `rtmp://localhost:1935/live` and the stream key to `test?key=supersecret`
5. Open a browser and go to `http://localhost:3000` to view your live stream!
