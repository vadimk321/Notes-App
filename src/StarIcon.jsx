function StarIcon(props) {

  const {filled} = props

  return (
    <svg
      className={`star ${filled ? "filled" : ""}`}
      viewBox="0 0 24 24"
    >
      <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
    </svg>
  );
}

export default StarIcon