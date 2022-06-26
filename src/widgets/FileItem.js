import React from 'react'

const FileItem = ({file,deleteFile}) => {
  return (
    <div>
     <li className='list-item' key={file.name}>

        {/* <icon>document page icon</icon> */}
        <p>{file.name}</p>
        <div className='actions'>
            {/* {file.isUploading && <icon spinner/>} */}
            {/* {!file.isUploading && <icon delete onClick={deleteFile(file.name)}}/> */}
        </div>
     </li>
    </div>
  )
}

export default FileItem