import React, { Component } from 'react';
import '../../../css/app.scss';
import { MdAddAPhoto } from "react-icons/md";

export default class ImageUploader extends Component {

    fileObj = [];
    fileArray = [];

    constructor(props) {
        super(props)
        this.state = {
            file: [null]
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }

    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }

    uploadFiles(e) {
        e.preventDefault()
        console.log(this.state.file)
    }

    render() {
        return (
            <div className="center">
                <form>
                <div className="flexImageUpload">
                <div className="form-group">
                <label for="fileUpload" class="custom-file-upload " >
                    <MdAddAPhoto size={40}/>
                </label>                    
                <input id="fileUpload" type="file" name="Upload your Image" className="form-control" onChange={this.uploadMultipleFiles} multiple />
                </div>
                <div className="form-group multi-preview">
                    {(this.fileArray || []).map(url => (
                        <img className='imageSize' src={url} alt="..." />
                    ))}
                </div>

                
                {/* <button type="button" className="btn btn-danger btn-block" onClick={this.uploadFiles}>Upload</button> */}
            </div>
            </form >
            </div>
            
        )
    }
}