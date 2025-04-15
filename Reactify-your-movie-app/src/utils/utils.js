export function getValueOrDefault(value, defaultText = "Information saknas") {
  return value ? value : defaultText;
}

export const handleBlurErrorMessage = (errorMessage, resetErrorMessageState) => {
  if (errorMessage) {
    resetErrorMessageState(""); // Återställ placeholder om användaren klickar utanför
  }
};

export const setErrorMessageTimeout = (errorMessage, setErrorMessageState) => {
  if (errorMessage) {
    const timer = setTimeout(() => {
      setErrorMessageState(""); // Återställ efter 2 sekunder
    }, 2000);

    return () => clearTimeout(timer); // Rensa timeout när komponenten tas bort
  }
};
