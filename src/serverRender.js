import React from 'react'
import {renderToString, renderToStaticMarkup} from 'react-dom/server'
import {Provider} from 'react-redux'
import {StaticRouter} from 'react-router-dom'
import App from './containers/App'

export function render(req, store, context){
  return renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.url}
        context={context}
      >
        <App/>
      </StaticRouter>
    </Provider>
  )
}

export function renderHead(context){
  return context.head.map(h=>(
    renderToStaticMarkup(h)
  )).join('')
}
