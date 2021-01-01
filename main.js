Webcam.set({
width: 310,
heigth:300,
image_format:"jpeg",
jpeg_quality:90,
 constraints:{
facingMode:"environment"
 }
});
camera = document.getElementById("webcam_view");
Webcam.attach(camera);