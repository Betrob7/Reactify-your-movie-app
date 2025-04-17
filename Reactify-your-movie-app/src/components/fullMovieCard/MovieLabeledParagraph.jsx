import React from "react";
import { getValueOrDefault } from "../../utils/utils";

function MovieLabeledParagraph({ label, value }) {
  return (
    <p className="movie__paragraph">
      <strong>{label}:</strong> {getValueOrDefault(value)}
    </p>
  );
}

export default MovieLabeledParagraph;
