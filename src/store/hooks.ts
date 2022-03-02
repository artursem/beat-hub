import React, { useState, useEffect, RefCallback } from 'react';
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

// export function useOnClickOutside(ref: any, handler: ()=>{}) {
//     useEffect(
//       () => {
//         const listener = (event: React.MouseEvent) => {
//           // Do nothing if clicking ref's element or descendent elements
//           if (!ref.current || ref.current.contains(event.target)) {
//             return;
//           }
//           handler(event);
//         };
//         document.addEventListener("mousedown", listener);
//         document.addEventListener("touchstart", listener);
//         return () => {
//           document.removeEventListener("mousedown", listener);
//           document.removeEventListener("touchstart", listener);
//         };
//       },
//       // Add ref and handler to effect dependencies
//       // It's worth noting that because passed in handler is a new ...
//       // ... function on every render that will cause this effect ...
//       // ... callback/cleanup to run every render. It's not a big deal ...
//       // ... but to optimize you can wrap handler in useCallback before ...
//       // ... passing it into this hook.
//       [ref, handler]
//     );
//   }
