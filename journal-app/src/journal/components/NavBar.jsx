import { LogoutOutlined, MenuOpenOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({drawerWidth = 240}) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        width:{sm: `calc(100% - ${drawerWidth}px)`},
        ml:{sm:`${drawerWidth}px`}
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          edge="start"
          sx={{mr:2, display:{sm: 'none'}}}
        >
          <MenuOpenOutlined/>
        </IconButton>

        <Grid container direction='row' justifyContent='space-between' alignItems='center'>
          <Typography variant="h6" noWrap component='div'>JournalAPP</Typography>
          <IconButton color='inherit' onClick={onLogout}>
            <LogoutOutlined/>
          </IconButton>
        </Grid>

      </Toolbar>
    </AppBar>
  )
}
