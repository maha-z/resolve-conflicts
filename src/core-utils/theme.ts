import { createTheme } from '@material-ui/core/styles';

export const pxToRem = (fontSize : number) => {
  return `${fontSize / 16}rem`;
};

export interface ColorMap {
    [name: string]: string;
  }
  
  export const COLORS: ColorMap = {
    
  };
  
  const theme = createTheme({
    
    spacing: 4,
    typography: {
      fontFamily: ['Slate Pro', 'sans-serif'].join(','),
      h1: {
        fontSize: '28px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '30px',
        letterSpacing: '0.2px',
      },
      h2: {
        fontSize: '24px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '26px',
        letterSpacing: '0.2px',
      },
      h3: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '22px',
        letterSpacing: '0.2px',
      },
      h4: {
        fontSize: '18px',
        fontWeight: 400,
        fontStyle: 'normal',
        lineHeight: '20px',
        letterSpacing: '0.2px',
      },
      h5: {
        fontSize: '18px',
        fontWeight: 300,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '20px',
        letterSpacing: '0.1px',
      },
  
      subtitle1: {
        fontSize: '16px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '18px',
        letterSpacing: '0.1px',
      },
      subtitle2: {
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '18px',
        letterSpacing: '0.1px',
      },
      caption: {
        fontSize: '12px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '14px',
        letterSpacing: '0.3px',
      },
      body1: {
        fontSize: '19px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '16px',
        letterSpacing: '0.1px',
      },
      body2: {
        fontSize: '14px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.1px',
      },
      button: {
        fontSize: '14px',
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 'normal',
        letterSpacing: '0.2px',
      },
      overline: {
        fontFamily: 'Slate Pro',
        fontSize: '11px',
        fontWeight: 500,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '12px',
        letterSpacing: '0.2px',
      },
    },
    overrides: {
      MuiAppBar: {
        colorDefault: {
          backgroundColor: COLORS.GAMMA_WHITE,
        },
      },
      MuiButton: {
        contained: {
          backgroundColor: COLORS.ALPHA_PRIMARY_GREEN_500,
          color: COLORS.GAMMA_WHITE,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: COLORS.ALPHA_PRIMARY_GREEN_700,
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: COLORS.ALPHA_PRIMARY_GREEN_100,
            color: COLORS.GAMMA_WHITE,
          },
          minWidth: '74px',
          minHeight: '32px',
          padding: '8px 16px',
        },
        outlined: {
          color: COLORS.ALPHA_PRIMARY_GREEN_500,
          boxShadow: 'none',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: COLORS.ALPHA_PRIMARY_GREEN_700,
            color: COLORS.GAMMA_WHITE,
  
            boxShadow: 'none',
          },
          '&:disabled': {
            backgroundColor: COLORS.ALPHA_PRIMARY_GREEN_100,
            color: COLORS.GAMMA_WHITE,
          },
          minWidth: '74px',
          minHeight: '32px',
          padding: '8px 16px',
          borderColor: COLORS.ALPHA_PRIMARY_GREEN_500,
        },
  
        text: {
          color: COLORS.ALPHA_PRIMARY_GREEN_500,
          borderRadius: 'null',
          textTransform: 'none',
          minHeight: '14px',
          minWidth: '32px',
          padding: '8px 16px',
  
          '&:hover': {
            color: COLORS.ALPHA_PRIMARY_GREEN_700,
          },
          '&:disabled': {
            color: COLORS.ALPHA_PRIMARY_GREEN_100,
          },
        },
  
        textSizeSmall: {
          minHeight: '14px',
          minWidth: '39px',
          padding: '8px 16px',
        },
  
        textSizeLarge: {
          minHeight: '42px',
          minWidth: '74px',
          padding: '8px 16px',
        },
  
        outlinedSizeSmall: {
          minWidth: '74px',
          minHeight: '28px',
          padding: '8px 16px',
        },
        outlinedSizeLarge: {
          minWidth: '74px',
          minHeight: '42px',
          padding: '13px 16px',
        },
  
        containedSizeSmall: {
          minWidth: '74px',
          minHeight: '28px',
          padding: '8px 16px',
        },
        containedSizeLarge: {
          minWidth: '74px',
          minHeight: '42px',
          padding: '13px 16px',
        },
      }
    },
  });
  export  default theme;