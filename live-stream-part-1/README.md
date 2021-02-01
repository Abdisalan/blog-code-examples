## How to run

1. Install Docker
2. `docker-compose build`
3. `docker-compose up`
4. Open OBS and in settings set the server to `rtmp://localhost:1935/live` and the stream key to `abdi?key=supersecret`
5. Open VLC and Open a Network Stream and set the url to `rtmp://localhost:1935/live/abdi`
6. You should see your live stream now!
