function CSSToCamel(str) {
  return str.replace(/-([a-z])/g, function(match, char) {
    return char.toUpperCase();
  });
}
function CamelToCSS(camelCase) {
    return camelCase.replace(/([A-Z])/g, '-$1').toLowerCase();
  }
export {CSSToCamel,CamelToCSS}

// CSSdashToCamel 