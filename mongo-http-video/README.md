## Requirements

My instructions use docker but you can run mongodb yourself locally as well.

## How to initialize the db with a video

```
# copy the bigbuck video from our last demo
cp ../http-video-stream/bigbuck.mp4 .

# After starting the server
curl  localhost:8000/init-video
```

## Start the server

```
# how to start
docker-compose up -d

# how to turn off
docker-compose down -v
```

## Bonus Challenge

This way of initializing the database is pretty bad.
Could you make an upload page?
What about a page that lists all the videos in the db that lets you pick which one to play?
