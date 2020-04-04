import React from 'react';
import ImageUploader from 'react-images-upload';

export default class imageUploaderComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles) {
        console.log('pictureFiles', pictureFiles.name);
        this.setState({
            pictures: pictureFiles
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.jpeg', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview = {true}
            />
        );
    }
}