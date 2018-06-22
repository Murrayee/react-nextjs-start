const express = require('express')
const next = require('next')
const compression = require('compression')
const LRUCache = require('lru-cache')
const port = parseInt(process.env.PORT, 10) || 9090
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
// 缓存设置
const ssrCache = new LRUCache({
    max: 100,
    maxAge: 1000 * 60 * 60 // 1hour
})

app
    .prepare()
    .then(() => {
        const server = express()
        if (!dev) {
            server.use(compression()) //gzip
        }

        server.get('/', (req, res) => {
            renderAndCache(req, res, '/')
        })
        server.get('*', (req, res) => {
            res.setHeader('Access-Control-Allow-Origin', '*')
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) 
                throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
function getCacheKey(req) {
    return `${req.url}`
}
function renderAndCache(req, res, pagePath, queryParams) {
    const key = getCacheKey(req)
    // 存在缓存
    if (ssrCache.has(key)) {
        console.log(`CACHE HIT: ${key}`)
        res.send(ssrCache.get(key))
        return
    }
    // 无缓存，重新渲染
    app
        .renderToHTML(req, res, pagePath, queryParams)
        .then((html) => {
            // 缓存页面
            console.log(`CACHE MISS: ${key}`)
            ssrCache.set(key, html)
            res.send(html)
        })
        .catch((err) => {
            app.renderError(err, req, res, pagePath, queryParams)
        })
}