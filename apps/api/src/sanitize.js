export function sanitizeResume(text="") {
  return text
    .replace(/(date of birth|dob)\s*[:=-]\s*[^\n]+/ig, "$1: [excluded]")
    .replace(/(gender|sex|marital status|religion)\s*[:=-]\s*[^\n]+/ig, "$1: [excluded]");
}
