function replaceVariables(text, object) {
  return Object.keys(object).reduce((text, key) => text.replace(`\${${key}}`, object[key]), text);
}

export default replaceVariables;
