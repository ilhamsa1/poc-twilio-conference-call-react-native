export default (themes, props) => {
  const { Metrics, Fonts, Colors } = themes
  const { bold, error, style } = props
  const fontSize = (style && style.fontSize) ? style.fontSize : Metrics.fontNormal
  const lineHeight = fontSize * 1.4
  return {
    text: {
      color: error ? Colors.error : Colors.text,
      fontFamily: bold ? Fonts.emphasis : Fonts.base,
      fontWeight: bold ? '500' : '300',
      ...style,
      fontSize,
      lineHeight,
    },
  }
}
