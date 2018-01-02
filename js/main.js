// 讓網頁會滑來滑去.
function scrollTo(to, duration) {
    var start = document.documentElement.scrollTop
    var change = to - start
    var increment = 25
    var elapsedTime = 0

    var scrollInterval = setInterval(function() {
        if (elapsedTime < duration) {
            elapsedTime += increment
            var position = start + elapsedTime / duration * change
            document.documentElement.scrollTop = position
        } else {
            clearInterval(scrollInterval)
        }
    }, increment)
}
function scrollToId(id) {
    var offset = document.getElementById(id).offsetTop
    scrollTo(offset - 70, 500)
}
  // 置入google map.
function initMap() {
  var position = {lat: 25.0396295, lng: 121.5644203}
  var map = new google.maps.Map(document.getElementById('position1'), {
    center: position,
    scrollwheel: false,
    zoom: 13
  })

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: position,
    title: 'Hello World!'
  })
}
initMap()

function closePopup() {
    document.getElementsByTagName("iframe")[0].src = ""
    document.getElementsByClassName('popup-outer')[0].style.display = 'none'
}

function setVideoUrl(type) {
    if (type == 'seat') {
        window.location.hash = 'seat'
    } else if (type == 'dish') {
        window.location.hash = 'dish'
    }   
    playVideo()
}

function playVideo() {
  if (window.location.hash == '#dish') {
    document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/onuM93KYUvI"
  } else {
    document.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/onuM93KYUvI"  
  }
  document.getElementsByClassName('popup-outer')[0].style.display = 'block'
}
window.onload = function() {
  playVideo()
}