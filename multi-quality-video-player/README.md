![](https://raw.githubusercontent.com/Abdisalan/blog-code-examples/assets/multi-quality-video-player.png)

## Dependencies
This project requires that `ffmpeg` is installed❗

You'll also need to provide the `PATH` to ffmpeg in `lib/ffmpeg.ts`
```typescript
// in lib/ffmpeg.ts
const FFMPEG_PATH = '/usr/bin/ffmpeg'
```
> 🛈 This project was developed on Linux so I'm not sure how or if it'll work on Windows.

## Getting Started
First, initialize the database❗
```bash
npm run init-db
```

Then, create the public folder and run the development server:

```bash
mkdir -p public
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
