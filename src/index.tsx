import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      <h1>J4uApp</h1>
      <div>
        <a href="https://dist.j4uapp.com/appcast.xml">App RSS</a>
        <br />
        <a href="https://dist.j4uapp.com/J4uApp-0.1.0-Installer.dmg">Download</a>
      </div>
    </>
  )
})

export default app
