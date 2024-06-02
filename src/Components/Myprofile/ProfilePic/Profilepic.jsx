import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import BlankProfile from '../../../assets/Blank-profile-image.jpg';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  position: 'absolute',
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const Imgstyles = styled('img')({
  borderRadius: '50%',
  width: '15vw',
  height: '15vw',
  objectFit: 'cover',
});

const Buttstyles = styled('div')({
  width: '4%',
  position: 'absolute',
  top: '35%',
  left: '28%',
});

export default function InputFileUpload() {
  const [selectedFile, setSelectedFile] = useState(BlankProfile);

  useEffect(() => {
    const storedFile = localStorage.getItem('selectedFile');
    if (storedFile) {
      setSelectedFile(storedFile);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result);
        localStorage.setItem('selectedFile', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div>
        <Imgstyles src={selectedFile} alt="Profile" />
        <Buttstyles>
          <Button
            component="label"
            variant="contained"
            startIcon={<AddAPhotoIcon />}
            sx={{ bgcolor: '#bfbfbf' }}
          >
            <VisuallyHiddenInput
              type="file"
              onChange={handleFileChange}
              accept="image/png, image/jpeg"
            />
          </Button>
        </Buttstyles>
      </div>
    </div>
  );
}
