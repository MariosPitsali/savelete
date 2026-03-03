import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url, fetch }) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos`).then((res) => res.json());
	console.log(res);
	console.log(url);

	return {
		todos: res
	};
};
