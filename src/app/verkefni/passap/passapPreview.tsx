"use client";

import React, { useState } from 'react';


export default function PassapPreview() {
	const [view, setView] = useState<'STATUS' | 'INFO' | 'PATTERN' | 'MAKE' | 'WIFI'>('STATUS');
	const [currentLine, setCurrentLine] = useState(0);
	return <></>
}