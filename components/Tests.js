'use client';
import React from 'react';

const Tests = ({ list }) => {
	const listjson = JSON.parse(JSON.stringify(list));

	const textjson = [];
	const colorjson = [];
	listjson.forEach((element, i) => {
		textjson[i] = element.text;
		colorjson[i] = element.color;
	});

	return <div className=''></div>;
};

export default Tests;
