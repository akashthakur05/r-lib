import React from 'react'

import { ExampleComponent,alert1 } from 'r-lib'
import 'r-lib/dist/index.css'

const App = () => {
  alert1()
  return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
