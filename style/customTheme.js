export default customTheme = {
  colors:  {
    bg: '#142D37',
    text_light: '#fffff',
    text_gray: '#D3D6D8',
    accent: '#F89132',
    stroke: '#424E53',
    divider: '#6A6A6A',
    table: {
      header: '#0B171C',
      fst: '#193540',
      scd: '#1E3E4A',
    },
  },
  shadows: {
    custom: {
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '10',
        _text: {
          fontWeight: 'extrabold',
        },
      },
    },
  },
};
