.topnav {
    background-color: #333;
    overflow: hidden;
}

.topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.active {
    background-color: #3cb371;
    color: white;
}

.topnav .icon {
    display: none;
}

body {
  Background: url('https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940') no-repeat ;
  background-size: cover;
  opacity: 0.7;
}
.Header h1 {
  text-align: center;
  font-size: 40px;
  color: #000;
  width: 100%;
  margin: 0px;
  padding: 10px;
  Background-color: #D3D3D3;
}

#About {
  padding: 20px;
  background-color: #3cb371;
  text-align: center;
  font-size: 20px;
  width: 100%;
}

.Services {
  Background-color: #D3D3D3;
  width: 100%;
  height: 250px;
  padding: 10px;
  text-align: center;
}

.Gardens, .CleanUp, .Trimming {
$(document).ready(function() {
  $('.expandable-box').click(function(e) {
    if($(this).hasClass('open')) {
      $('.expandable-box.out').not($(this)).removeClass('out');
      $(this).removeClass('open');
    }
    else {
      $('.expandable-box').not($(this)).addClass('out');
      $(this).addClass('open');
    }
  });
});