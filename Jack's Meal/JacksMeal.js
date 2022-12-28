const timeToEat = (time) => {
  const splitted = time.split(" ");
  const splittedTime = splitted[0].split(":");

  let hr = parseInt(splittedTime[0]),
    min = parseInt(splittedTime[1]),
    res = [];
  if (hr === 12) {
    hr = 0;
  }

  let rem_mins = 60 - min,
    rem_hrs;
  if (rem_mins === 60 || rem_mins === 0) {
    rem_mins = 0;
  }
  if (hr >= 0 && hr < 7) {
    rem_hrs = 7 - hr;
    if (rem_mins >= 1 && rem_mins <= 59) {
      rem_hrs = rem_hrs - 1;
    }
  } else {
    rem_hrs = 12 - hr;
    if (rem_mins >= 1 && rem_mins <= 59) {
      rem_hrs = rem_hrs - 1;
    }
  }

  res.push(rem_hrs, rem_mins);
  console.log(res);
};

timeToEat("7:00 a.m.");
