import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';

export const NoteView = () => {
	return (
		<Grid
			container
			direction='row'
			justifyContent='space-between'
			alignItems='center'
			sx={{ mb: 1 }}>
			<Grid item>
				<Typography fontSize={39} fontWeight='light'>
					July 8th, 2023
				</Typography>
			</Grid>
			<Grid item>
				<Button color='primary' sx={{ p: 2 }}>
					<SaveOutlined sx={{ fontSize: 25, mr: 1 }} />
					Save
				</Button>
			</Grid>
			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					placeholder='Enter a title'
					label='Title'
					sx={{ mb: 2, mt: 2 }}
				/>
			</Grid>
			<Grid container>
				<TextField
					type='text'
					variant='filled'
					fullWidth
					multiline
					minRows={5}
					placeholder='What happened today?'
					label='Entry'
					sx={{ mb: 2 }}
				/>
			</Grid>
			<ImageGallery />
		</Grid>
	);
};
