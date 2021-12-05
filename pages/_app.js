import { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'

import Nav from '../src/Components/Landing/Nav'
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Nav />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
