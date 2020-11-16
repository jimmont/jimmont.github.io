/* see
https://deno.land/std/testing/
https://doc.deno.land/https/deno.land/std@0.76.0/testing/bench_example.ts
*/
import * as test from "https://deno.land/std/testing/asserts.ts";
import { bench, BenchmarkTimer, runBenchmarks } from "https://deno.land/std/testing/bench.ts";
import { app } from './app.js';

/*
 * TODO https://deno.land/std@0.76.0/testing/asserts_test.ts
 *
 *
 *
equal() - Deep comparison function, where actual and expected are compared deeply, and if they vary, equal returns false.
assert() - Expects a boolean value, throws if the value is false.
assertEquals() - Uses the equal comparison and throws if the actual and expected are not equal.
assertNotEquals() - Uses the equal comparison and throws if the actual and expected are equal.
assertStrictEquals() - Compares actual and expected strictly, therefore for non-primitives the values must reference the same instance.
assertStringIncludes() - Make an assertion that actual includes expected.
assertMatch() - Make an assertion that actual match RegExp expected.
assertNotMatch() - Make an assertion that actual not match RegExp expected.
assertArrayIncludes() - Make an assertion that actual array includes the expected values.
assertObjectMatch() - Make an assertion that actual object match expected subset object
assertThrows() - Expects the passed fn to throw. If fn does not throw, this function does. Also compares any errors thrown to an optional expected Error class and checks that the error .message includes an optional string.
assertThrowsAsync() - Expects the passed fn to be async and throw (or return a Promise that rejects). If the fn does not throw or reject, this function will throw asynchronously. Also compares any errors thrown to an optional expected Error class and checks that the error .message includes an optional string.
unimplemented() - Use this to stub out methods that will throw when invoked.
unreachable() - Used to assert unreachable code.
 * */

Deno.test("basic-test", function basicTest(){
	// like 🦕-deno-123-2020-09-24T05:19:49.471Z
	// YYYY-MM-DDTHH:MM:SS.nnnZ
	const text = app();
	test.assert(/🦕-deno-123-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test( text ));
});

// examples from
// Basic
bench(function forIncrementX1e9(b: BenchmarkTimer){
	b.start();
	for (let i = 0; i < 1e9; i++);
	b.stop();
});

// Reporting average measured time for $runs runs of func
bench({
	name: "runs100ForIncrementX1e6",
	runs: 100,
	func(b){
		b.start();
		for (let i = 0; i < 1e6; i++);
		b.stop();
	}
});

// Itsabug
bench(function throwing(b){
	b.start();
	// Throws bc the timer's stop method is never called
});

// Bench control
if (import.meta.main) {
	runBenchmarks({ skip: /throw/ });
}
