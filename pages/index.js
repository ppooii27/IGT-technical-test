import Head from 'next/head';
import {
	Typography,
	CardContent,
	Card,
} from '@mui/material';
import Box from '@mui/material/Box';
import MuiImageSlider from '../components/slideshow';
import classes from './index.module.css';

const card = (
	<>
		<CardContent>
			<Typography variant="h5" component="div">
				LOREM IPSUM LOREM
			</Typography>
			<Typography
				sx={{ mb: 1.5, fontSize: '0.8rem' }}
				color="text.secondary"
			>
				Lorem upsum dolor sit amet, consectetur adipisicing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliquall.
			</Typography>
		</CardContent>
	</>
);
export default function Home() {
	return (
		<>
			<Head>
				<title>Technical Test</title>
			</Head>
			<main>
				<Box className={classes['box-container']}>
					<Box className={classes['slideshow-box']}>
						<MuiImageSlider />
					</Box>
					<Box className={classes['info-box']}>
						<Card className={classes['card-container']}>
							<Card
								className={classes['card-content']}
								variant="outlined"
							>
								{card}
							</Card>
							<Card
								className={classes['card-content']}
								variant="outlined"
							>
								{card}
							</Card>
						</Card>
					</Box>
				</Box>
			</main>
		</>
	);
}
