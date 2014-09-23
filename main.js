// START OF JQUERY

$(document).on('ready', function() {
  //OUTER SHELL (DARK GREY)
  var outerShell = $('<div class="outer-shell"></div>');
  $('body').append(outerShell);
  //INNER SHELL (BLACK)
  var innerShell = $('<div class="inner-shell"></div>');
  outerShell.append(innerShell);
  //Left PM & Auto Labels (white)
  var labelPM = $('<p class="label-PM">PM</p>');
  outerShell.append(labelPM);
  var labelAuto = $('<p class="label-auto">AUTO</p>');
  outerShell.append(labelAuto);

  //Clock Screen (dark red)
  var clockScreen = $('<div class="clock-screen"></div>');
  innerShell.append(clockScreen);
  //Clock AM/PM indicator (red) - RED DOT
  var clockIndicator = $('<div class="clock-indicator"></div>');
  innerShell.append(clockIndicator);
  //Clock Text (red)
  var clockText = $('<p class="clock-text">00:00</p>');
  clockScreen.append(clockText);

  //Bottom AM Label & Frequencies (white)
  var bottomAM = $('<p class="bottom-AM"><span class="push-right">AM</span> <span class="push-right-two">53</span> <span class="push-right-two">60</span>  <span class="push-right-two">70</span>  <span class="push-right-two">90</span>  <span class="push-right-two">110</span>  <span class="push-right-two">140</span>  <span class="push-right-two">170</span> </p>');
  outerShell.append(bottomAM);
  //Bottom FM Label & Frequencies (white)
  var bottomFM = $('<p class="bottom-FM"><span class="push-right">FM</span>  <span class="push-right-two">88</span>  <span class="push-right-two">92</span>  <span class="push-right-two">96</span>  <span class="push-right-three">102</span>  <span class="push-right-two">106</span>  108 </p>');
  outerShell.append(bottomFM);
});

