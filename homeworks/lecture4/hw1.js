// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    const stack = [];
    const tagPattern = /<\/?([a-zA-Z0-9]+)>/g;
    let match;

    while ((match = tagPattern.exec(html)) !== null) {
        const tag = match[0];
        if (tag.startsWith('</')) {
            if (stack.length === 0 || stack.pop() !== tag.slice(2, -1)) {
                return false;
            }
        } else {
            stack.push(tag.slice(1, -1));
        }
    }

    return stack.length === 0;
}