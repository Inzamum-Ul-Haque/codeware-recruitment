let res = [];

const finalCountdown = (nums) => {
  // for empty arrays
  if (nums.length === 0) {
    res.push(0, []);
    console.log(res);
    return;
  }

  let i = 1,
    seq = 0,
    end,
    temp = [];

  // if array starts with 1
  if (nums[0] === 1) {
    temp.push([1]);
    seq = 1;
  }
  while (i < nums.length) {
    // for only values of 1
    if (nums[i] === 1 && nums[i] + 1 !== nums[i - 1]) {
      end = i;
      temp.push(nums.slice(seq, end + 1));
      seq = i + 1;
      i++;
      continue;
    }

    if (nums[i] + 1 === nums[i - 1] && nums[i] === 1) {
      end = i;
      temp.push(nums.slice(seq, end + 1));
      seq = i + 1;
    } else if (nums[i] + 1 === nums[i - 1]) {
      i++;
      continue;
    } else {
      seq = i;
    }
    i++;
  }
  res.push(temp.length, temp);
  console.log(res);
};

finalCountdown([]);
