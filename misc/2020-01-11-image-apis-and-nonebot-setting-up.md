---
title: Image APIs & NoneBot
slug: image-apis-and-nonebot-setting-up
date: 2020-01-11
excerpt: "Here is a list of APIs that can return some images and notes of the process of setting up NoneBot and CoolQ HTTP API (on my Mac)."
catagory: Misc
---

## Misc

I wrote a qqbot which can throw a picture of tempting food back to the people who send pictures of tempting food to you (which we called '放毒') automatically. I called this bot [AntiFood](https://github.com/Renovamen/AntiFood), it is based on [NoneBot](https://github.com/richardchien/nonebot). So here is a list of APIs that can return some images and notes of the process of setting up NoneBot and [CoolQ HTTP API](https://github.com/richardchien/coolq-http-api).

## Image APIs

- Unsplash
    - Offical: https://source.unsplash.com/
    - Lorem Picsum: https://picsum.photos/
- Cats: https://thecatapi.com/
- Dogs: https://shibe.online/
- Anime: http://img.xjh.me/

Finally, I choose to crawl food pictures from Baidu Image...

## CoolQ HTTP API

NoneBot depends on CoolQ HTTP API ([docs](https://cqhttp.cc/docs/4.14/#/)), it can be deployed by using docker.

Pull docker image and create a folder for CoolQ:

```bash
docker pull richardchien/cqhttp:latest
mkdir coolq
```

Run it (on `127.0.0.1:9000`, default password is `MAX8char`):

```bash
docker run -ti --rm --name cqhttp-test \ 
           -v $(pwd)/coolq:/home/user/coolq \
           -p 9000:9000 \
           -p 5700:5700 \
           -e COOLQ_ACCOUNT=123456789 \ # qq id of the bot
           -e COOLQ_URL=https://dlsec.cqp.me/cqp-tuling \
           -e CQHTTP_SERVE_DATA_FILES=yes \
           richardchien/cqhttp:latest
```

## NoneBot

[Here](https://nonebot.cqp.moe/guide/) are docs of NoneBot.

Modify `coolq/app/io.github.richardchien.coolqhttpapi/config/123456789.ini` (config file of CoolQ):

```ini
[123456789]
serve_data_files = yes
ws_reverse_api_url = ws://host.docker.internal:8080/ws/api/
ws_reverse_event_url = ws://host.docker.internal:8080/ws/event/
use_ws_reverse = true
```

Here use `host.docker.internal` but not `127.0.0.1`, because here CoolQ is running in docker.

Install NoneBot:

```bash
pip install nonebot
```

Then, just run `bot.py`.

Note that sending images needs CoolQ Pro, and CoolQ's CQ code can only send images under `coolq/data/image/`. But CoolQ HTTP API [enhances](https://cqhttp.cc/docs/4.14/#/CQCode) it.