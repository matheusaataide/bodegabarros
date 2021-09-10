import { AppBar, Toolbar, IconButton, Typography,  Button } from '@material-ui/core';

function App() {
	return (
    	<div className="App">
      		<AppBar position="static">
				<Toolbar>
					<IconButton 
						edge="start" 
						color="inherit" 
						aria-label="menu">
					</IconButton>
					<Typography variant="h6">
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
    	</div>
  	);
}

export default App;
