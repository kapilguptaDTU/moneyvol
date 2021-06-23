showQuotes();

function showQuotes() {
  var path = d3.select("#quote-box");
  var t = 0;

  quotes("#q0", 3000, 6000);
  quotes("#q1", 3000, 4000);
  quotes("#q2", 3000, 3000);
  quotes("#q3", 3000, 3000);
  quotes("#q4", 3000, 5000);
  quotes("#q5", 3000, 6000);
  quotes("#q6", 3000, 3000);
  quotes("#q7", 6000, 6000);

  quotes("#q0", 3000, 6000);
  quotes("#q1", 3000, 4000);
  quotes("#q2", 3000, 3000);
  quotes("#q3", 3000, 3000);
  quotes("#q4", 3000, 5000);
  quotes("#q5", 3000, 6000);
  quotes("#q6", 3000, 3000);
  quotes("#q7", 6000, 6000);

  quotes("#q0", 3000, 6000);
  quotes("#q1", 3000, 4000);
  quotes("#q2", 3000, 3000);
  quotes("#q3", 3000, 3000);
  quotes("#q4", 3000, 5000);
  quotes("#q5", 3000, 6000);
  quotes("#q6", 3000, 3000);
  quotes("#q7", 6000, 6000);

  quotes("#q8", 6000, 10000);

  function quotes(id, ease, run) {
    path.select(id)
      .transition().delay(t).style('display', 'block')
      .transition().duration(ease).style('opacity', '100')
      .transition().delay(t+run).duration(ease).style('opacity', '0')
      .transition().delay(t+run+ease).style('display', 'none');

    t = t+run+ease;
  }

}