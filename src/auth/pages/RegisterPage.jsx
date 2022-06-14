import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
	return (
		<AuthLayout title='Sign Up'>
			<form>
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Name'
							type='text'
							placeholder='John Doe'
							fullWidth></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Email'
							type='email'
							placeholder='john@doe.com'
							fullWidth></TextField>
					</Grid>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label='Password'
							type='password'
							placeholder='Enter your password'
							fullWidth></TextField>
					</Grid>
					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid item xs={12}>
							<Button variant='contained' fullWidth>
								Sign Up
							</Button>
						</Grid>
					</Grid>
					<Grid container direction='row' justifyContent='end'>
						<Typography sx={{ mr: 1 }}>
							Do you have an account?
						</Typography>
						<Link
							component={RouterLink}
							color='inherit'
							to='/auth/login'>
							Login
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
