function convertToSeconds(timeStr) {
  // Split the string by colon
  const parts = timeStr.split(":");

  // Parse minutes and seconds
  const minutes = parseInt(parts[0], 10);
  const seconds = parseInt(parts[1], 10);

  // Calculate total seconds
  const totalSeconds = minutes * 60 + seconds;

  return totalSeconds;
}
export default convertToSeconds;
