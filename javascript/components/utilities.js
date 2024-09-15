const getById = (id) => document.getElementById(id);

const convertTimeInSeconds = (minutes, seconds) => {
  const min = parseInt(minutes, 10);
  const sec = parseInt(seconds, 10);
  return min * 60 + sec;
}

const convertSecondsInTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return [min, sec];
}

export { getById, convertTimeInSeconds, convertSecondsInTime }
