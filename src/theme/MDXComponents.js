import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'
import Gist from 'react-gist'
import Image from '@site/src/components/Image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Gist,
  Image,
  Icon: FontAwesomeIcon,
}
