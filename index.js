// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]

function superbowlWin(record) {
    return record.find(team => team.result === 'W').year; 
  }

  function superbowlWin(record) {
    const win = record.find(team => team.result === 'W');
  
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }
  