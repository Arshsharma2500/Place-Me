import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BlankProfile from './assets/Blank-profile-image.jpg';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  position: 'absolute',
//   bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
const size = {width: 250, height: 250};

const Imgstyles = styled('img')({
    borderRadius: '50%',
    width: '15vw',
    height: '30vh',

});

const Buttstyles = styled('div')({
    width: '4%',
    position: 'absolute',
    top: '35%',
    left: '28%',
    
});

export default function InputFileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      {selectedFile 
      ? (
        <div>
          <Imgstyles src={URL.createObjectURL(selectedFile)} alt="Uploaded" {...size}/>
          {/* <Button variant="contained" onClick={handleRemoveFile}>
            Remove
          </Button> */}
          <Buttstyles><Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<AddAPhotoIcon />}
          sx={{bgcolor: '#bfbfbf'}}
        >
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
          />
        </Button></Buttstyles>
        </div>
      ) : 
      (
        <div>
        <Imgstyles src={BlankProfile} alt="Upload Profile Picture" {...size}/>
        <Buttstyles><Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<AddAPhotoIcon />}
          sx={{ bgcolor: '#bfbfbf' }}
        >
          <VisuallyHiddenInput
            type="file"
            onChange={handleFileChange}
            accept="image/png, image/jpeg"
          />
        </Button></Buttstyles>
        </div>
      )}
    </div>
  );
}
