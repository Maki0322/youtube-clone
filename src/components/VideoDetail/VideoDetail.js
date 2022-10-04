import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const VideoDetail = () => {
  const location = useLocation()
  useEffect (() => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    console.log('id',id)
    // eslint-disable-next-line
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail