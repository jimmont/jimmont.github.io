import * as test from "https://deno.land/std/testing/asserts.ts";
import { app } from './app.js';

Deno.test("basic-test", function basicTest(){
	// like 🦕-deno-123-2020-09-24T05:19:49.471Z
	// YYYY-MM-DDTHH:MM:SS.nnnZ
	const text = app();
	test.assert(/🦕-deno-123-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test( text ));
});
