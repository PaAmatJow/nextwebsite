'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the theme type
type Mode = 'light' | 'dark';

// Define the context type
interface ThemeContextType {
	mode: Mode;
	toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [mode, setMode] = useState<Mode>(() => {
		// Load the theme from local storage or default to 'dark'
		if (typeof window !== 'undefined') {
			const storedTheme = localStorage.getItem('theme');
			return (storedTheme as Mode) || 'light';
		} else {
			return 'dark'; // Default to 'dark' if localStorage is not available
		}
	});

	const toggle = () => {
		setMode((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	useEffect(() => {
		// Save the theme to local storage whenever it changes
		if (typeof window !== 'undefined') {
			localStorage.setItem('theme', mode);
		}
	}, [mode]);

	const contextValue: ThemeContextType = {
		mode,
		toggle,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div
				className={`${
					mode === 'light' ? 'lightTheme' : 'darkTheme'
				} transition-all duration-1000`}
			>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);

	if (context === undefined) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}

	return context;
};
