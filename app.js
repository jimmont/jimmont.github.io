export function app(){
	// like 🦕-deno-123-2020-09-24T05:19:49.471Z
	return (`🦕-deno-123-${ (new Date).toISOString() }`);
};
