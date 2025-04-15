export function getValueOrDefault(value, defaultText = "Not available") {
  return value ? value : defaultText;
}
