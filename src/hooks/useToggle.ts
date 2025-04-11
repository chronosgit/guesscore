import { useState } from 'react';
import { z } from 'zod';

export default function useToggle(initialValue = false) {
	const [value, setValue] = useState(initialValue);

	const changeValue = (newValue: boolean) => {
		if (!z.boolean().safeParse(newValue).success) return;

		setValue(newValue);
	};

	const toggleValue = () => {
		if (!z.boolean().safeParse(value).success) return;

		setValue((prev) => !prev);
	};

	return { value, changeValue, toggleValue };
}
