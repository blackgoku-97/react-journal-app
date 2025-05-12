import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks';
import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {

  const dispatch = useDispatch();
  const { active:note, messageSaved, isSaving } = useSelector( state => state.journal );

  const { title, body, date, onInputChange, formState } = useForm( note );

  const dateString = useMemo(() => {
    const newDate = new Date( date );
    return newDate.toUTCString();
  }, [ date ]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch( setActiveNote(formState) );
  }, [ formState ]);

  useEffect(() => {
    if ( messageSaved.length > 0 ) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [ messageSaved ]);

  const onSaveNote = () => {
    dispatch( startSaveNote() );
  }

  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return;
    dispatch( startUploadingFiles( target.files ) );
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid>
        <Typography fontSize={39} fontWeight="light">
          { dateString }
        </Typography>
      </Grid>
      <Grid>

        <input
          type="file"
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }      
          style={{ display: "none" }}    
        />

        <IconButton
          color="primary"
          disabled={ isSaving }
          onClick={ () => fileInputRef.current.click() }
        >
          <UploadOutlined />
        </IconButton>

        <Button
            disabled={ isSaving }
            onClick={ onSaveNote } 
            color="primary" 
            sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          placeholder="Ingrese un título"
          label="Título"
          sx={{ width: "100%", border: "none", mb: 1 }}
          name="title"
          value={ title }
          onChange={ onInputChange }
        />

        <TextField
          type="text"
          variant="filled"
          multiline
          placeholder="Que sucedió en el día de hoy"
          sx={{ width: "100%" }}
          minRows={ 5 }
          name="body"
          value={ body }
          onChange={ onInputChange }
        />
      </Grid>

      <ImageGallery images={ note.imageUrls } />
    </Grid>
  );
};
