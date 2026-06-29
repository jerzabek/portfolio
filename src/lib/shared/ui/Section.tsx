import type { ReactNode } from 'react';
import { css } from 'styled-system/css';

interface Props {
	title?: string;
	id?: string;
	children?: ReactNode;
}

export default function Section({ title, id, children }: Props) {
	return (
		<section
			id={id}
			className={css({ py: '12', borderBottom: '1px solid', borderColor: 'border.muted' })}
		>
			{title && (
				<h2
					className={css({
						fontSize: 'xs',
						fontWeight: 'bold',
						mb: '6',
						color: 'text.subtle',
						letterSpacing: 'wider',
						textTransform: 'uppercase'
					})}
				>
					{title}
				</h2>
			)}
			{children}
		</section>
	);
}
