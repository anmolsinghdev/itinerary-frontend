// 3rd party libraries
import React from 'react'
import { Audio } from 'react-loader-spinner'

interface Props {
  size?: number // pixels
}

export default function Loader({ size = 80 }: Props): React.ReactElement {
  return (
    <div>
      <Audio height={size} color="green" />
    </div>
  )
}
