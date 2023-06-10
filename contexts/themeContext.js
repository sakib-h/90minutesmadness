'use client';
import { createContext, useReducer, useEffect } from 'react';
const initialState = {
	theme: localStorage.getItem('theme') || 'system',
};
const ThemeReducer = (state, action) => {
	switch (action.type) {
		case 'LIGHT':
			return {
				theme: action.payload,
			};
		case 'DARK': {
			return {
				theme: action.payload,
			};
		}
		case 'SYSTEM': {
			return {
				theme: action.payload,
			};
		}
		default:
			return state;
	}
};
export const ThemeContext = createContext(initialState);
export const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(ThemeReducer, initialState);
	useEffect(() => {
		localStorage.setItem('theme', state.theme);
	}, [state.theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme: state.theme,
				dispatch,
			}}>
			{children}
		</ThemeContext.Provider>
	);
};
