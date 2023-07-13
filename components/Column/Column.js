export const Column = ({children, width, backgroundColor, textColor}) => {
	const widthStyle = width ? {minWidth: width, flexGrow: 1} : {flexGrow: 1, flexBasis: 0};
	const backgroundColorStyle = backgroundColor ? { backgroundColor: backgroundColor } : {};
	const textColorStyle = textColor ? { color: textColor } : {};

	return (
		<div style={ { ...widthStyle, ...backgroundColorStyle, ...textColorStyle } } className="px-2 py-5">
			{children}
		</div>
	)
}
