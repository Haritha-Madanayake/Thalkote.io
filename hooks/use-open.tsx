"use client";
import { useState } from "react";

export default function useOpen(current: boolean) {
	const [open, setCurrent] = useState<boolean>(current);

	const toggle = () => {
		setCurrent(prev => !prev);
	}

	return {
		open,
		toggle
	}
}