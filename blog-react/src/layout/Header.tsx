import { ReactElement, ReactNode } from 'react'
import { IconButton } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { TemplateTheme, ThemeColors } from '../common/theme'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'

interface HeaderProps {
  children: ReactNode
  logo: string
  onMenuClick: () => void
}

const CustomAppBar = styled(AppBar)(({ theme }: any) => ({
  borderBottom: `1px solid ${ThemeColors.borderGrey}`,

  '&.MuiPaper-elevation4': {
    boxShadow: 'none',
  },

  [theme.breakpoints.down('md')]: {
    // @TODO on #2447
    // Find a better solution to get out of the way of iOS top bar/notch on iPads
    marginTop: theme.spacing(2),
  },
}))

export const ThemeLogo = styled.div<any>`
  background-image: url(${(props) => props.logo});
  height: 46px;
  width: 149.5px;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${(props) => props.sm}) {
    margin: 0px ${(props) => props.theme.spacing(0.5)};
    height: 43px;
    width: 130px;
  }
`

const Header = ({ logo, children, onMenuClick }: HeaderProps): ReactElement => {
     const theme = TemplateTheme
  const sm = `${theme.breakpoints.values.sm}${theme.breakpoints.unit}`
  return (
    <CustomAppBar position="static" color="secondary">
      <Toolbar>
        {/* Brand contains hamburguer menu and logo */}
        <Box sx={{ display: 'flex' }}>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={onMenuClick}>
        <MenuIcon sx={{ color: `${ThemeColors.darkGreen}` }} />
      </IconButton>

      <ThemeLogo logo={logo} theme={theme} sm={sm} />
    </Box>
        {/* Content placeholder box */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Right block content */}
        <Box>{children}</Box>
      </Toolbar>
    </CustomAppBar>
  )
}

export default Header
