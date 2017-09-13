const path = require('path')
const fs = require('fs')

const React = require('react')
const {Provider} = require('react-redux')
const {renderToString, renderToStaticMarkup} = require('react-dom/server')
const {StaticRouter} = require('react-router-dom')

const api = require('./api')
const {default: configureStore} = require('../build-src/store')
const {default: App} = require('../build-src/containers/App')

module.exports = function universalLoader(req, res) {
  const filePath = path.resolve(__dirname, '..', 'build', 'index.html')

  fs.readFile(filePath, 'utf8', (err, htmlData)=>{
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const context = {}
    const store = configureStore()
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App/>
        </StaticRouter>
      </Provider>
    )

    if (context.url) {
      // Somewhere a `<Redirect>` was rendered
      redirect(301, context.url)
    } else {
      // we're good, send the response
      const RenderedApp = htmlData.replace('{{SSR}}', markup)
      res.send(RenderedApp)
    }
    try {
      const context = {data: {}, head: [], req, api}
      const store = configureStore()
      renderToString(
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            <App/>
          </StaticRouter>
        </Provider>
      )
      const keys = Object.keys(context.data)
      const promises = keys.map(k=>context.data[k])
      try {
        const resolved = await Promise.all(promises)
        resolved.forEach((r,i)=>context.data[keys[i]]=r)
      } catch (err) {
        console.error('err', err)
        return res.status(400).json({message: "Uhhh, some thing didn't work"})
      }
      const markup = renderToString(
        <Provider store={store}>
          <StaticRouter
            location={req.url}
            context={context}
          >
            <App/>
          </StaticRouter>
        </Provider>
      )
      const headMarkup = context.head.map(h=>(
        renderToStaticMarkup(h)
      )).join('')

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        redirect(301, context.url)
      } else {
        // we're good, send the response
        const RenderedApp = htmlData.replace('{{SSR}}', markup)
          .replace('{{head}}', headMarkup)
          .replace('{data:{}}', JSON.stringify(new Buffer(JSON.stringify(context.data)).toString('base64')))
        if (context.code)
          res.status(context.code)
        res.send(RenderedApp)
      }
    } catch(err) {
      console.error('Render Error', err)
      return res.status(500).json({message: 'Render Error'})
    }
  })
}

