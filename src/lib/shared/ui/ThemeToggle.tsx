'use client';

import { Icon } from '@iconify/react';
import { styled } from 'styled-system/jsx';
import { useTheme } from '@/lib/shared/theme';

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme();

	return (
		<styled.button
			type="button"
			onClick={toggleTheme}
			w="10"
			h="10"
			borderRadius="full"
			display="flex"
			alignItems="center"
			justifyContent="center"
			bg="surface.muted"
			border="none"
			cursor="pointer"
			fontSize="lg"
			transition="all {durations.normal}"
			color={{ base: 'yellow.600', _dark: 'yellow.400' }}
			_hover={{ bg: 'surface.subtle', transform: 'scale(1.1)' }}
			aria-label="Toggle theme"
		>
			{theme === 'light' ? (
				<Icon icon="mdi:weather-night" width={24} height={24} />
			) : (
				<Icon icon="mdi:weather-sunny" width={24} height={24} />
			)}
		</styled.button>
	);
}
