nextPass: {
  date: passDate.toString(),
  duration: (result.response[0].duration/60).toFixed(2),
}

const passDate = new Date(result.response[0].risetime*1000);
