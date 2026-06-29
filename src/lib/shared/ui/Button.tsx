import type { ReactNode } from 'react';
import { css } from 'styled-system/css';

interface Props {
	variant?: 'filled' | 'outline';
	href?: string;
	type?: 'button' | 'submit';
	onClick?: () => void;
	children?: ReactNode;
}

const baseStyles = css({
	px: '6',
	py: '3',
	borderRadius: 'md',
	fontWeight: 'medium',
	cursor: 'pointer',
	display: 'inline-block',
	textDecoration: 'none',
	border: '2px solid',
	fontSize: 'sm',
	w: '100%',
	textAlign: 'center',
	transition: 'all {durations.normal}',
	_hover: {
		transform: 'scale(1.02)'
	},
	_active: {
		transform: 'scale(0.98)'
	}
});

const filledStyles = css({
	bg: 'text',
	color: 'surface',
	borderColor: 'text'
});

const outlineStyles = css({
	bg: 'transparent',
	color: 'text',
	borderColor: 'text'
});

export default function Button({
	variant = 'filled',
	href,
	type = 'button',
	onClick,
	children
}: Props) {
	const buttonClass = `${baseStyles} ${variant === 'filled' ? filledStyles : outlineStyles}`;

	if (href) {
		return (
			<a href={href} className={buttonClass}>
				{children}
			</a>
		);
	}

	return (
		<button type={type} onClick={onClick} className={buttonClass}>
			{children}
		</button>
	);
}
