export function getValueOrDefault(value, defaultText = "Information saknas") {
  return value ? value : defaultText;
}
