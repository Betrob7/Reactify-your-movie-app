export function getValueOrDefault(value, defaultText = "loading...") {
  return value ? value : defaultText;
}

export const handleBlurErrorMessage = (errorMessage, resetError) => {
  if (errorMessage) {
    resetError("");
  }
};

export const setErrorMessageTimeout = (errorMessage, setErrorMessageState) => {
  if (errorMessage) {
    const timer = setTimeout(() => {
      setErrorMessageState("");
    }, 2000);

    return () => clearTimeout(timer);
  }
};
