import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props) {
	return (
		<div className={classes.main}>
			<MainNavigation>{props.children}</MainNavigation>
		</div>
	);
}

export default Layout;
