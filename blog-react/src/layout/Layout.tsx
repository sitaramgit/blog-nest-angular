import { ThemeProvider } from '@mui/material/styles'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import { MenuItem, ScopedCssBaseline, styled } from '@mui/material'
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined'
import PeopleOutlineOutlined from '@mui/icons-material/PeopleOutlineOutlined'
import MessageOutlined from '@mui/icons-material/MessageOutlined'
import Assignment from '@mui/icons-material/Assignment'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import Tooltip from '@mui/material/Tooltip'
import { TemplateTheme, ThemeColors } from '../common/theme'
import { Box, Collapse, Divider, Drawer, MenuList, Theme, Toolbar } from '@mui/material'
import Header from './Header'
import { useSelector } from 'react-redux'

interface LayoutProps {
  children: ReactNode
}

const Container = styled('div')({
    display: 'flex',
    width: '100%',
    height: '100%',
    overflow: 'auto'
  })
const ContentContainer = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100%',
  overflow: 'auto'
})
const SideMenuContainer = styled('div')({
    display: 'flex',
    // There is global css overriding our font, unfortunately we have to this until we get rid of App.css
    fontFamily: 'Poppins',
  })
  
  const CustomMenuItem = styled(MenuItem)(({ theme }: any) => ({
    '&.MuiMenuItem-root': {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: `${theme.spacing(1.25)} ${theme.spacing(3)}`,
      fontSize: 14,
      fontWeight: `400`,
      color: ThemeColors.textBlack,
    },
    '&.Mui-selected': {
      background: ThemeColors.selectedGreen,
      borderLeft: `3px solid ${ThemeColors.darkGreen}`,
      color: ThemeColors.darkGreen,
      fontWeight: `600`,
    },
    '.MuiButtonBase-root': {
      padding: '10px 24px',
    },
    '.Mui-selected.MuiListItemButton-root': {
      background: ThemeColors.selectedGreen,
      borderLeft: `3px solid ${ThemeColors.darkGreen}`,
      color: ThemeColors.darkGreen,
      fontWeight: `600`,
    },
  }))
  
  // this ChildCustomMenuItem added for collapsed menuItems
  const ChildCustomMenuItem = styled(MenuItem)(({ theme }: any) => ({
    '&.MuiMenuItem-root': {
      display: 'flex',
      justifyContent: 'flex-start',
      padding: `${theme.spacing(1.25)} ${theme.spacing(3)}`,
      fontSize: 13,
      fontWeight: `400`,
      color: ThemeColors.textBlack,
      margin: '4px 0',
    },
    '&.Mui-selected': {
      background: ThemeColors.snowWhite,
      color: ThemeColors.labelGreen,
      fontWeight: `500`,
    },
  }))
  
  const SpaceBetweenContainer = styled('div')(({ theme }: any) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 240,
    height: `100%`,
    borderRight: `1px solid ${ThemeColors.lightGrey}`,
  }))
  
  const MenuItemIcon = styled('div')(({ theme }: any) => ({
    display: 'flex',
    marginRight: theme.spacing(2.5),
    color: `inherit`,
  }))
  
  const MenuItemLabel = styled('div')({
    display: 'flex',
    color: `inherit`,
  })
  
  const BottomSection = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    color: `inherit`,
  })
  
  const FooterContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
  })

export const Layout = ({ children }: LayoutProps): ReactElement => {
  // Legacy code
  // @TODO fix User reducer types
  // User the property data on the user state doesn't have any type
  // thus we can't also type it here, unfortunately
//   const user = useSelector((state: any) => state.User?.data)

// const user: any = {}
const user: any = useSelector((state: any) => state.login?.userDetails?.userData);
console.log(user)
// const history = useHistory()
  const [collapse, setCollapse] = useState(false)
  const [logout, setLogout] = useState(false)
//   useLogout(logout)

  const [settingsInfo, setSettingsInfo] = useState<any>({
    nameTag: '',
    fullName: '',
    email: '',
    phone: '',
  })


  useEffect(() => {
  }, [])

  useEffect(() => {
      setSettingsInfo({
        nameTag: `${user?.name?.charAt(0)}`,
        fullName: user?.name,
        email: user.email,
        phone: '9989099892',
      })
  }, [user])

  const collapseSideMenu = () => {
    if (collapse) {
      setCollapse(false)
    }
  }

  const goToRoute = (route: string) => {
    // history.push({
    //   pathname: route,
    // })
  }

  const handleLogout = () => {
    setLogout(true)
  }

  const menuItems = [
    {
      icon: <MessageOutlined />,
      title: 'Encounters',
      role: 'nav',
      pathname: '/Encounters',
      handleMenuItemClick: () => goToRoute('/Encounters'),
    },
    {
      icon: <PeopleOutlineOutlined />,
      title: 'Patients',
      role: 'nav',
      pathname: '/PatientList',
      handleMenuItemClick: () => goToRoute('/PatientList'),
    },
    {
      icon: <ForumOutlinedIcon />,
      title: 'Messages',
      pathname: '/AllMessages',
      role: 'nav',
      handleMenuItemClick: () => goToRoute('/AllMessages'),
    },
    {
      icon: <Assignment />,
      title: `To Do's`,
      role: 'nav',
      pathname: '/AllTodoList',
      handleMenuItemClick: () => goToRoute('/AllTodoList'),
    },
    {
      icon: <SettingsIcon />,
      title: `Settings`,
      role: 'nav',
      pathname: '/Settings',
      handleMenuItemClick: () => goToRoute('/Settings'),
    },
    {
      icon: <LogoutOutlinedIcon />,
      title: `Logout`,
      role: 'button',
      pathname: '',
      handleMenuItemClick: () => handleLogout(),
    },
  ]
const handleAllMenuItemClick = (item: any, status: boolean) => {

}
  const renderMenu = (
    <SpaceBetweenContainer>
      <div>
        {/* We only present the Brand component on SM resolutions and below (Tablet portrait and below) */}
        <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
          <Toolbar>
            {/* <Brand onMenuClick={handleMenuClose} logo={logo} /> */}
          </Toolbar>
          <Divider />
        </Box>

        <MenuList sx={{ display: 'flex', flexDirection: 'column', pt: 0 }}>
          {menuItems.map((item: any) => {
            /* this condition was added to make the collapse menu a dynamic. */
          
              return (
                <CustomMenuItem
                  key={item.title}
                  selected={item.role === 'nav'}
                  onClick={() => handleAllMenuItemClick(item, true)}
                >
                  <MenuItemIcon color="inherit">{item.icon}</MenuItemIcon>
                  <MenuItemLabel>{item.title}</MenuItemLabel>
                </CustomMenuItem>
              )
            
          })}
        </MenuList>
      </div>

      <BottomSection sx={{ mt: { xs: 2 } }}>
        {/* <ProfileCard {...profileInfo} />
        {!!footerText && (
          <FooterContainer>
            <Footer>{footerText}</Footer>
          </FooterContainer>
        )}
        {troubleshooterFlag && FooterWithStatus && (
          <FooterWithStatus onStatusClick={handleMenuClose} small={true}></FooterWithStatus>
        )} */}
      </BottomSection>
    </SpaceBetweenContainer>
  )

  return (
    <ThemeProvider theme={TemplateTheme}>
      <Header logo={''} onMenuClick={() => setCollapse(!collapse)}>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          gap: 2,
          p: 0.5,
          border: `1px solid`,
          borderColor: 'primary.main',
          borderRadius: '4px',
          color: 'primary.main',
        }}
      >
        <Tooltip title="Support">
         <span>hello</span>
        </Tooltip>
        <Tooltip title="To Do List">
          <>
            <span>todo</span>
          </>
        </Tooltip>
      </Box>
      </Header>
      <ScopedCssBaseline />
      <Container>
      <SideMenuContainer>
      {/* On MD resolutions (Tablet landscape and above) present the menu as a collapsible side div that pushes the content to the right*/}
      <Collapse
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
          overflowY: 'hidden',
          // To fix screen jerk issue when scrollbar is displaying
          scrollbarGutter: 'stable',
          // Displaying the scrollbar only on hover
          '&:hover': {
            overflowY: 'auto',
          },
        }}
        in={collapse}
        orientation="horizontal"
        timeout="auto"
      >
        {renderMenu}
      </Collapse>

      {/* On SM resolutions (Tablet portrait and below) present the menu as a drawer */}
      <Drawer
        sx={{ display: { sm: 'flex', md: 'none' } }}
        open={collapse}
        variant="temporary"
        onClose={() => {}}
      >
        {renderMenu}
      </Drawer>
    </SideMenuContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </ThemeProvider>
  )
}
