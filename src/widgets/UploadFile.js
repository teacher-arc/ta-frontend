
import React from 'react'

function UploadFile({files,setFiles, removeFile}) {
    const uploadHandler = (event) => {
        const file = event.target.files[0];
        file.isUploading(true);
        setFiles([...files,file])

        //upload file
        const formData = new FormData();
        formData.append(file.name,file,file.name);

        // axios.post('',formData)
        // .then((res) => {
        //     file.isUploading(false);
        //     setFiles([...files,file]);
        // })
        // .catch((err) => {
        //     //inform error
        //     console.error(err);
        //     removeFile(file.name);
        // })
    };
  return (
    <div className='file-card'>
        <div className='file-input'>
            <input type='file'/>
            <button>
                {/* add add icon */}
                
            </button>
        </div>
        <p className='main'>Supported Files</p>
        <p className='info'>PDF, JPG, PNG</p>
    </div>
  )
}

export default UploadFile