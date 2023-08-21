import React from 'react'
import ShowItems from '../ShowItems/ShowItems'

const HomeComponent = () => {

  const folders = ["New Folder", "new folder 2"]
  const files = ["New file", "new file 2"]

  return (
    <div className='col-md-12 w-100'>
      <ShowItems title={"Created Folder"} items={folders} />
      <ShowItems title={"Created Files"} items={files} />
    </div>
  )
}

export default HomeComponent
