<template>
  <div id="camerafeed">
    <div class="inputoutput">
      <input type="file" accept="image/*" id="fileUpload">
      <input type="file" accept="image/*" id="cameraInput" capture="environment">
      <video id="videoInput" autoplay="true"></video>
      <button id="captureButton">Live capture</button>
      <button id="takePictureButton">Save snapshot</button>
      <img id="imgInput" alt="No Image" />
      <canvas id="imgOutput" ></canvas>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  let document = window.document;
  $( document ).ready(function() {
    let cv = window.cv;
    const imgElement = document.getElementById("imgInput");
    let fileUpload = document.getElementById("fileUpload");
    let cameraInput = document.getElementById("cameraInput");
    let cameraOutput = document.getElementById('imgOutput');
    const imageContext = cameraOutput.getContext('2d');
    let captureButton = document.getElementById("captureButton");
    let takePictureButton = document.getElementById("takePictureButton");
    let videoViewer = document.getElementById("videoInput");
    let cap = new cv.VideoCapture(videoViewer);
    const supported = 'mediaDevices' in window.navigator;
    var takingVideo = false;
    window.console.log(supported);
    function updateImage(event) {
      imgElement.src = URL.createObjectURL(event.target.files[0]);
    }
    function processImage() {
      let src = cv.imread(imgElement);
      let dst = new cv.Mat();
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY, 0);
      cv.imshow('imgOutput', dst);
      dst.delete();
    }
    function toggleVideoStream() {
      if (takingVideo) {
        videoViewer.srcObject.getVideoTracks().forEach(track => track.stop());
        videoViewer.srcObject = null;
        videoViewer.hidden = true;
        takingVideo = false;
      } else {
        let constraints = {
          video: true,
        };
        window.navigator.mediaDevices.getUserMedia(constraints)
          .then((stream) => {
            videoViewer.hidden = false;
            videoViewer.srcObject = stream;
        });
        cameraOutput.hidden = true;
        takingVideo = true;
      }
    }
    function takePicture() {
      if (takingVideo) {
        cameraOutput.hidden = false;
        imageContext.drawImage(videoViewer, 0, 0, cameraOutput.width, cameraOutput.height);
        videoViewer.srcObject.getVideoTracks().forEach(track => track.stop());
        videoViewer.srcObject = null;
        videoViewer.hidden = true;
        takingVideo = false;
      }
    }
    fileUpload.addEventListener("change", updateImage, false);
    cameraInput.addEventListener("change",updateImage, false);
    imgElement.onload = processImage;
    captureButton.addEventListener('click', toggleVideoStream);
    takePictureButton.addEventListener('click', takePicture);
  });
  export default {
    props: {}
  }
</script>

  <style scoped>
</style>