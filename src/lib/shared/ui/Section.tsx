import type { ReactNode } from 'react';
import { styled } from 'styled-system/jsx';

interface Props {
	title?: string;
	id?: string;
	children?: ReactNode;
}

export default function Section({ title, id, children }: Props) {
	return (
		<styled.section id={id} py="12" borderBottom="1px solid" borderColor="border.muted">
			{title && (
				<styled.h2
					fontSize="xs"
					fontWeight="bold"
					mb="6"
					color="text.subtle"
					letterSpacing="wider"
					textTransform="uppercase"
				>
					{title}
				</styled.h2>
			)}
			{children}
		</styled.section>
	);
}
