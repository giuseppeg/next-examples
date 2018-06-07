const path = require('path')
const fs = require('fs')

fs.readdirSync('./examples').forEach(file => {
  const route = path.parse(file).name
  fs.writeFileSync(`./pages/${route}.js`, getsrc(route))
})

function getsrc(route) {
const src =
`import data from '../examples/${route}'
import Example from '../components/example'

export default ({children}) => <Example render={children} data={data} />`
return src
}
