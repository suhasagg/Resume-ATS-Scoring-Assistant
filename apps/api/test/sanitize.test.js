import test from "node:test"; import assert from "node:assert/strict"; import {sanitizeResume} from "../src/sanitize.js";
test("common sensitive fields are excluded",()=>{const x=sanitizeResume("DOB: 01/01/1990\nGender: Male\nJava engineer");assert.match(x,/DOB: \[excluded\]/i);assert.match(x,/Gender: \[excluded\]/i);assert.match(x,/Java engineer/);});
