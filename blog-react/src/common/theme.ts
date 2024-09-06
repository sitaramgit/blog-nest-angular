import { createTheme, CSSObject, Theme } from '@mui/material/styles'
import '@mui/material/styles'
import '@mui/material/Typography'
import { ComponentsVariants } from '@mui/material'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    th?: React.CSSProperties
    label?: React.CSSProperties
    input?: React.CSSProperties
    link?: React.CSSProperties
    activelink?: React.CSSProperties
    ol?: React.CSSProperties
    ul?: React.CSSProperties
    captionlink?: React.CSSProperties
    code?: React.CSSProperties
    paragraph1?: React.CSSProperties
    paragraph2?: React.CSSProperties
    subtitle3?: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    th?: React.CSSProperties
    label?: React.CSSProperties
    input?: React.CSSProperties
    ol?: React.CSSProperties
    ul?: React.CSSProperties
    link?: React.CSSProperties
    activelink?: React.CSSProperties
    list?: React.CSSProperties
    captionlink?: React.CSSProperties
    code?: React.CSSProperties
    paragraph1?: React.CSSProperties
    paragraph2?: React.CSSProperties
    subtitle3?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    th: true
    label: true
    input: true
    ol: true
    ul: true
    link: true
    activelink: true
    list: true
    captionlink: true
    code: true
    paragraph1: true
    paragraph2: true
    subtitle3: true
  }
}

// Notion document for Theme Catalogue
// https://www.notion.so/5ac91f1e2dbd4dd2a2d3fe02bca34deb#d42bd2fdc2994407bad4e8d2e41677da
export const ThemeColors = {
  // Green
  green: '#36b282',
  darkGreen: '#095D4B',
  labelGreen: '#246c5e',
  selectedGreen: 'rgba(174, 224, 205, 0.5)',
  backgroundGreen: 'rgba(54, 178, 130, 0.1)',
  lightGreen: '#ecf1e7',
  aquamarine: '#36b281',
  neonGreen: '#00E671',
  buttonGreen: '#217869',
  lightGreenBackground: '#D7F0E6',

  // White
  snowWhite: '#ebf7f3',
  white: '#FFF',

  // Black
  textBlack: '#4a4a4a',
  textSecondary: '#585858',
  shadowBlack: 'rgba(0, 0, 0, 0.1)',
  borderBlack: '#4a4a4a57',
  borderDarkBlack: '#3b3b3bb2',

  // Grey
  borderGrey: '#e4e6e8',
  backgroundGrey: '#808080',
  lightGrey: '#DCDDDE',
  lightestGrey: '#ECECEC',
  secondaryTextGrey: '#929292',
  grey: '#C5C5C5',
  darkGrey: '#949494',
  strongDarkGrey: '#2A2A2A',

  // Red
  textRed: 'red',
  lightRed: '#FCEEEE',
  textLightRed: '#D64B4B',
  textStrongRed: '#ff4500',
  urgentPriority: '#ff4500',
  urgentPriorityBackground: 'rgba(255, 69, 0, 0.1)',
  statPriority: '#D60000',
  statPriorityBackground: 'rgba(214, 0, 0, 0.1)',
  backgroundRed: 'rgb(211, 47, 47)',

  // Blue
  textBlue: '#447aa6',
  neonBlue: '#62F0F5',
  iconBlue: '#0084bc',
  linkBlue: '#186ADE',

  // Yellow
  backgroundYellow: 'rgba(255, 246, 223, 0.6)',
  textYellow: '#CF9300',
  brightYellow: '#F5C518',

  // Shadow
  boxShadow: '2px 2px 10px 2px rgba(215, 215, 215, 0.21)',
  popoverShadow: '0px 2px 14px rgba(70, 79, 122, 0.15)',
  whiteBoxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
}

export interface ITheme {
  theme: Theme
}

export const ThemeConfig = {
  palette: {
    primary: {
      main: ThemeColors.green,
    },
    secondary: {
      main: ThemeColors.white,
    },
  },
  typography: {
    fontFamily: 'Poppins',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          th: 'th',
          label: 'label',
          link: 'a',
          activelink: 'a',
          ul: 'ul',
          ol: 'ol',
          code: 'code',
        },
      },
      styleOverrides: {
        root: {
          color: ThemeColors.textBlack,
          fontFamily: 'Poppins',
        },
        h1: {
          fontSize: '2.5rem',
          lineHeight: '3.25rem',
          fontWeight: 400,
        },
        h2: {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          fontWeight: 400,
        },
        h3: {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 400,
        },
        h4: {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: 500,
        },
        h6: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 500,
        },
        subtitle1: {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 500,
        },
        subtitle3: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 500,
        },
        paragraph1: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        paragraph2: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        th: {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 500,
        },
        label: {
          fontSize: '0.813rem',
          lineHeight: '1.125rem',
          fontWeight: 500,
        },
        input: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        link: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        activelink: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 500,
        },
        ul: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        ol: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.688rem',
          lineHeight: '1rem',
          fontWeight: 400,
        },
        captionlink: {
          fontSize: '0.688rem',
          lineHeight: '1rem',
          fontWeight: 500,
        },
        code: {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
          fontFamily: 'roboto-mono',
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: { borderColor: 'rgba(0, 0, 0, 0.18)', borderRadius: '8px' },
        },
      ] as ComponentsVariants['MuiPaper'],
    },
    MuiTooltip: {
      styleOverrides: {
        popper: {
          whiteSpace: 'pre-wrap',
        } as CSSObject, // cast to CSSObject to avoid type error
      },
    },
  },
}

export const TemplateTheme = createTheme(ThemeConfig)
