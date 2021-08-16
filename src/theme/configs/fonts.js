import { Platform } from 'react-native'; // PlatformOSType
// import type { Fonts } from '../types';

const fontConfig = {
	web: {
		regular: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '400',
		},
		medium: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '500',
		},
		light: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '300',
		},
		thin: {
			fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
			fontWeight: '100',
		},
	},
	ios: {
		bold: {
			fontFamily: 'Poppins-Bold',
			fontWeight: '800',
		},
		semiBold: {
			fontFamily: 'Poppins-SemiBold',
			fontWeight: '600',
		},
		regular: {
			fontFamily: 'Poppins-Regular',
			fontWeight: '400',
		},
		jost: {
			fontFamily: 'Jost-Regular',
			fontWeight: '400',
		},
		light: {
			fontFamily: 'Poppins-Light',
			fontWeight: '300',
		},
		thin: {
			fontFamily: 'Poppins-Thin',
			fontWeight: '100',
		},
	},
	default: {
		bold: {
			fontFamily: 'Poppins-Bold',
			fontWeight: '800',
		},
		semiBold: {
			fontFamily: 'Poppins-SemiBold',
			fontWeight: '600',
		},
		regular: {
			fontFamily: 'Poppins-Regular',
			fontWeight: '400',
		},
		jost: {
			fontFamily: 'Jost-Regular',
			fontWeight: '400',
		},
		light: {
			fontFamily: 'Poppins-Light',
			fontWeight: '300',
		},
		thin: {
			fontFamily: 'Poppins-Thin',
			fontWeight: '100',
		},
	},
};

export default function configureFonts(config) {
	const fonts = Platform.select({ ...fontConfig, ...config });
	return fonts;
}
