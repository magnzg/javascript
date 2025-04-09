const video = document.getElementById("video")

navigator.mediaDevices.getUserMedia({video : true})
    .then(stream => { //como se fosse if
        video.srcObject = stream
    })
    .catch(erro => { //como se fosse else
        alert("Não foi possivel acessar a camera")
    })