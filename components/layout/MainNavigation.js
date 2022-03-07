import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
	AppBar,
	Toolbar,
	Button,
	IconButton,
	Drawer,
	Link,
	MenuItem,
	Box,
	Stack,
} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@mui/styles';
import classes from './MainNavigation.module.css';
import logoImage from '../../assets/logo.png';

const headersData = [
	{
		label: 'text',
		variant: 'text',
		color: 'darker',
	},
	{
		label: 'Button1',
		href: '/button1',
		variant: 'contained',
	},
	{
		label: 'Button2',
		href: '/button2',
		variant: 'contained',
	},
	{
		label: 'Link 1',
		href: '/link1',
		variant: 'text',
	},
	{
		label: 'Link 2',
		href: '/link2',
		variant: 'text',
	},
	{
		label: 'Link 3',
		href: '/link3',
		variant: 'text',
	},
];

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#400CCC',
		paddingRight: '79px',
		paddingLeft: '118px',
		'@media (max-width: 900px)': {
			paddingLeft: 0,
		},
	},
	logo: {
		fontFamily: 'Work Sans, sans-serif',
		fontWeight: 600,
		color: '#FFFEFE',
		textAlign: 'left',
		'@media (max-width: 900px)': {
			margin: '0 auto',
		},
	},
	menuButton: {
		flex: '33%',
		backgroundColor: '#1976d2',
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
		},
		'&:active': {
			boxShadow: 'none',
			backgroundColor: '#0062cc',
			borderColor: '#005cbf',
		},
		'&:focus': {
			boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
		},
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	drawerContainer: {
		padding: '20px 70px',
	},
}));

function MainNavigation(props) {
	const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

	const [state, setState] = useState({
		mobileView: false,
		drawerOpen: false,
	});

	const { mobileView, drawerOpen } = state;

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 900
				? setState((prevState) => ({ ...prevState, mobileView: true }))
				: setState((prevState) => ({
						...prevState,
						mobileView: false,
				  }));
		};
		setResponsiveness();
		window.addEventListener('resize', () => setResponsiveness());

		return () => {
			window.removeEventListener('resize', () => setResponsiveness());
		};
	}, []);

	const displayDesktop = () => {
		return (
			<Toolbar className={toolbar}>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'flex-start',
						width: '100%',
						height: '50px',
					}}
					component="div"
				>
					{logoBox}
					<Stack
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							flexWrap: 'wrap',
							width: '469px',
							marginTop: '15px',
							rowGap: '10px',
						}}
						direction="row"
						spacing={2}
					>
						{getMenuButtons()}
					</Stack>
				</Box>
			</Toolbar>
		);
	};

	const displayMobile = () => {
		const handleDrawerOpen = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: true }));
		const handleDrawerClose = () =>
			setState((prevState) => ({ ...prevState, drawerOpen: false }));

		return (
			<Toolbar>
				<IconButton
					{...{
						edge: 'start',
						color: 'darker',
						'aria-label': 'menu',
						'aria-haspopup': 'true',
						onClick: handleDrawerOpen,
					}}
				>
					<MenuIcon />
				</IconButton>
				<Drawer
					{...{
						anchor: 'left',
						open: drawerOpen,
						onClose: handleDrawerClose,
					}}
				>
					<div className={drawerContainer}>{getDrawerChoices()}</div>
				</Drawer>

				<div className={logo}>{logoBox}</div>
			</Toolbar>
		);
	};

	const getDrawerChoices = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Link
					{...{
						to: href,
						color: 'inherit',
						style: { textDecoration: 'none' },
						key: label,
					}}
				>
					<MenuItem>{label}</MenuItem>
				</Link>
			);
		});
	};

	const logoBox = (
		<Box>
			<Image
				alt="logo"
				src={logoImage}
				layout="intrinsic"
				width={256}
				height={197}
			/>
		</Box>
	);

	const getMenuButtons = () => {
		return headersData.map(({ label, href, variant, color }) => {
			const style = variant === 'contained' ? menuButton : null;
			return (
				<Button
					{...{
						key: label,
						color: color || 'inherit',
						href: href ? href : null,
						variant: variant,
						className: style,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<div className={classes.header}>
			<AppBar
				sx={{
					backgroundColor: '#fff',
				}}
			>
				{mobileView ? displayMobile() : displayDesktop()}
			</AppBar>
			<Box
				sx={{
					marginTop: '64px',
					justifyContent: 'space-between',
					alignItems: 'flex-start',
					width: '100vw',
				}}
			>
				{props.children}
			</Box>
		</div>
	);
}

export default MainNavigation;
