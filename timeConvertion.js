function timeConversion(s) {
  // Write your code here
  let hours = Number(s.substring(0, 2));
  let minutes = Number(s.substring(3, 5));
  let seconds = Number(s.substring(6, 8));
  if (s.endsWith("PM")) {
    if (hours >= 1 && hours <= 11) {
      hours += 12;
    }
  } else {
    if (hours === 12) {
      hours -= 12;
    }
  }
  return [
    hours < 10 ? "0" + hours.toString() : hours.toString(),
    minutes < 10 ? "0" + minutes.toString() : minutes.toString(),
    seconds < 10 ? "0" + seconds.toString() : seconds.toString(),
  ].join(":");
}

const convert = (s) => {
  let hours = Number(s.substring(0, 2));
  let minutes = Number(s.substring(3, 5));
  let seconds = Number(s.substring(6, 8));

  if (s.endsWith("PM")) {
    if (hours >= 1 && hours <= 11) {
      hours += 12;
    }
  } else if (s.endsWith("AM")) {
    if (hours == 12) {
      hours = 0;
    }
  }

  return [
    hours < 10 ? "0" + hours.toString() : hours.toString(),
    minutes < 10 ? "0" + minutes.toString() : minutes.toString(),
    seconds < 10 ? "0" + seconds.toString() : seconds.toString(),
  ].join(":");
};

const data = [];
const time = "07:05:45PM";
console.log(convert(time));
