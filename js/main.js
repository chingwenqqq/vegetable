// 讓網頁會滑來滑去.
function scrollTo(to, duration) {
    var start = document.body.scrollTop
    var change = to - start
    var increment = 25
    var elapsedTime = 0

    var scrollInterval = setInterval(function() {
        if (elapsedTime < duration) {
            elapsedTime += increment
            var position = start + elapsedTime / duration * change
            document.body.scrollTop = position
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

function playVideo() {
    document.getElementsByTagName("iframe")[0].src = "http://www.youtube.com/embed/PxNYvk_0Onw?autoplay=1"
    document.getElementsByClassName('popup-outer')[0].style.display = 'block'
}