import { useState, useEffect, useRef, useCallback, MouseEvent } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useDebounce<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debouncedValue;
}

// export const useClickOutsideListenerRef = (onClose: () => void) => {
// 	const ref = useRef(null);
// 	const escapeListener = useCallback((e: KeyboardEvent) => {
// 		if (e.key === 'Escape') {
// 			onClose();
// 		}
// 	}, []);
// 	const clickListener = useCallback(
// 		(e: MouseEvent | any) => {
// 			if (!(ref.current! as any).contains(e.target)) {
// 				onClose?.();
// 			}
// 		},
// 		[ref.current]
// 	);
// 	useEffect(() => {
// 		document.addEventListener('click', clickListener);
// 		document.addEventListener('keyup', escapeListener);
// 		return () => {
// 			document.removeEventListener('click', clickListener);
// 			document.removeEventListener('keyup', escapeListener);
// 		};
// 	}, []);
// 	return ref;
// };
