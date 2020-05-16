var Links = {
  SetColor:function(color) {
    let aList = document.querySelectorAll('a');

    for (let index=0;index<aList.length;index++) {
      aList[index].style.color=color;
    }
  }
}

var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color=color;
  },
  SetBackgroundColor: function(color) {
    document.querySelector('body').style.backgroundColor=color;
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');

  if(self.value === 'night') {
    Body.SetBackgroundColor('black');
    Body.SetColor('white');
    self.value = 'day';

    Links.SetColor('powderblue')

  } else {
    Body.SetBackgroundColor('white');
    Body.SetColor('black');
    self.value = 'night';

    Links.SetColor('blue')
  }
}
