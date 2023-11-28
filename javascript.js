var isMoving = true;
//backfround berjalan
function setBackgroundMoving() {
    if (isMoving == true) {
        setTimeout(function () {
            var bg = document.getElementById('main');
            bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px', '')) + 1) + 'px';
            //update score
            document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;

            setBackgroundMoving();
        }, 5);
    }
}

setBackgroundMoving();

//meteor
function setMeteorMoving() {
    setTimeout(function () {

        var meteor = document.getElementById('meteor');
        var plane = document.getElementById('plane');

        meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px', '')) + 1) + 'px'
        if (parseInt(meteor.style.marginTop.replace('px', ' ')) > 500) {
            meteor.style.marginLeft = (Math.floor(Math.random() * 250) + 50) + 'px';
            meteor.style.marginTop = "-100px";
        }
        if (meteor.offsetTop + 56 >= plane.offsetTop && meteor.offsetLeft + 50 >= plane.offsetLeft &&
            meteor.offsetTop + 56 <= plane.offsetTop + 100 && meteor.offsetLeft <= plane.offsetLeft + 50) {
            var userResponse = confirm('Game Over , Score : ' + document.getElementById('score').innerHTML + '\nDo you want to restart?');
            if (userResponse) {
                window.location.reload();
            } if(!userResponse) {
                isMoving = false;
                plane.setAttribute('class', 'freeze');
                meteor.setAttribute('class', 'freeze');
            }
        } else {
            setMeteorMoving()
        }
    }, 1);
}
setMeteorMoving()

//pergerakan rocket menggunakan tombol
window.addEventListener('keydown', function (e) {
    var plane = document.getElementById('plane')
    var left = parseInt(plane.style.marginLeft.replace('px', ''));
    var top = parseInt(plane.style.marginTop.replace('px', ''));
    /*
    37 -> kiri
    38 -> atas
    39 -> kanan
    40 -> bawah
    */
    if (isMoving == true) {
        if (e.keyCode == 37) {
            if (left > 0) {
                plane.style.marginLeft = (left - 10) + 'px';
            }
        } else if (e.keyCode == 38) {
            if (top > 0) {
                plane.style.marginTop = (top - 10) + 'px';
            }
        } else if (e.keyCode == 39) {
            if (left < 340) {
                plane.style.marginLeft = (left + 10) + 'px';
            }
        } else if (e.keyCode == 40) {
            if (top < 400) {
                plane.style.marginTop = (top + 10) + 'px';
            }
        }
    }
});