import React from 'react'
import FileItem from './FileItem'

const FileList = ({files,removeFile}) => {
    const deleteFileHandler = ({files,removeFile}) => {
        // axios.delete(' ${_name}')
        // .then((res) => removeFile(_name))
        // .catch((err) => console.error(err))
    }
  return (
    <div className='file-list'>
        {files && files.map(f => <FileItem key={f.name} file={f} deleteFile={deleteFileHandler}/>)}

    </div>
  )
}

export default FileList