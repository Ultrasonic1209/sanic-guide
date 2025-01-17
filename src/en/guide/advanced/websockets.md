# Websockets

Sanic provides an easy to use abstraction on top of [websockets](https://websockets.readthedocs.io/en/stable/).


## Routing

---:1

Websocket handlers can be hooked up to the router similar to regular handlers.
:--:1
```python
from sanic import Request, Websocket

async def feed(request: Request, ws: Websocket):
    pass

app.add_websocket_route(feed, "/feed")
```
```python
from sanic import Request, Websocket

@app.websocket("/feed")
async def feed(request: Request, ws: Websocket):
    pass
```
:---

## Handler


---:1
Typically, a websocket handler will want to hold open a loop.

It can then use the `send()` and `recv()` methods on the second object injected into the handler.

This example is a simple endpoint that echos back to the client messages that it receives.
:--:1
```python
from sanic import Request, Websocket

@app.websocket("/feed")
async def feed(request: Request, ws: Websocket):
    while True:
        data = "hello!"
        print("Sending: " + data)
        await ws.send(data)
        data = await ws.recv()
        print("Received: " + data)
```
:---

::: new NEW in v22.9
---:1
You can simplify your loop by just iterating over the `Websocket` object in a for loop.
:--:1
```python
from sanic import Request, Websocket

@app.websocket("/feed")
async def feed(request: Request, ws: Websocket):
    async for msg in ws:
        await ws.send(msg)
```
:---
:::

## Configuration

See [configuration section](/guide/deployment/configuration.md) for more details, however the defaults are shown below.

```python
app.config.WEBSOCKET_MAX_SIZE = 2 ** 20
app.config.WEBSOCKET_MAX_QUEUE = 32
app.config.WEBSOCKET_READ_LIMIT = 2 ** 16
app.config.WEBSOCKET_WRITE_LIMIT = 2 ** 16
app.config.WEBSOCKET_PING_INTERVAL = 20
app.config.WEBSOCKET_PING_TIMEOUT = 20
```
