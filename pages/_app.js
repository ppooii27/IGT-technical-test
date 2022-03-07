import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../src/theme';
import { CssBaseline } from '@mui/material';
import { StylesProvider, createGenerateClassName } from '@mui/styles';

const generateClassName = createGenerateClassName({
	productionPrefix: 'c',
});

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<StylesProvider generateClassName={generateClassName}>
				<Layout>
					<CssBaseline />
					<Component {...pageProps} />
				</Layout>
			</StylesProvider>
		</ThemeProvider>
	);
}

export default MyApp;
