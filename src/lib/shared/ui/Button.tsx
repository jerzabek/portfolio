import type { ReactNode } from 'react';
import { styled } from 'styled-system/jsx';

interface Props {
	variant?: 'filled' | 'outline';
	href?: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
	children?: ReactNode;
}

export default function Button({
	variant = 'filled',
	href,
	type = 'button',
	onClick,
	children
}: Props) {
	const bg = variant === 'filled' ? 'text' : 'transparent';
	const color = variant === 'filled' ? 'surface' : 'text';

	if (href) {
		return (
			<styled.a
				href={href}
				px="6"
				py="3"
				borderRadius="md"
				fontWeight="medium"
				cursor="pointer"
				display="inline-block"
				textDecoration="none"
				border="2px solid"
				borderColor="text"
				fontSize="sm"
				w="100%"
				textAlign="center"
				transition="all {durations.normal}"
				bg={bg}
				color={color}
				_hover={{ transform: 'scale(1.02)' }}
				_active={{ transform: 'scale(0.98)' }}
			>
				{children}
			</styled.a>
		);
	}

	return (
		<styled.button
			type={type}
			onClick={onClick}
			px="6"
			py="3"
			borderRadius="md"
			fontWeight="medium"
			cursor="pointer"
			display="inline-block"
			border="2px solid"
			borderColor="text"
			fontSize="sm"
			w="100%"
			textAlign="center"
			transition="all {durations.normal}"
			bg={bg}
			color={color}
			_hover={{ transform: 'scale(1.02)' }}
			_active={{ transform: 'scale(0.98)' }}
		>
			{children}
		</styled.button>
	);
}
