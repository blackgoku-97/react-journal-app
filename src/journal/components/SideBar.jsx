import { useSelector } from 'react-redux'
import { Box, Divider, Drawer, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ drawerWidth = 240 }) => {

    const { displayName } = useSelector( state => state.auth );

    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        { displayName }
                    </Typography>
                </Toolbar>

                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                            <ListItem key={ text } disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Box>
                                        <ListItemText primary={ text } />
                                        <ListItemText secondary={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui quam quos distinctio quasi dolorum illo fuga enim, quas doloribus harum, officia quia veritatis accusamus explicabo praesentium, officiis est nisi.' } />
                                    </Box>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>


        </Box>    
    )
}