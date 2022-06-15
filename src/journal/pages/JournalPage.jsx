import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';

export const JournalPage = () => {
	return (
		<JournalLayout>
			<NothingSelectedView />
			{/* <NoteView /> */}
			<IconButton
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'secondary.dark',
					':hover': {
						backgroundColor: 'secondary.dark',
						opacity: 0.9,
					},
					position: 'fixed',
					right: '40px',
					bottom: '40px',
				}}>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
