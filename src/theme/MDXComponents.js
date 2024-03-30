import React from 'react'
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents'

import Gist from 'react-gist'
import Image from '@site/src/components/Image'
import Bookmark from '@site/src/components/Bookmark'

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Gist,
  Image,
  Bookmark,
}
