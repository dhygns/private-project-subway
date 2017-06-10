import THREE from "n3d-threejs"

var renderer = undefined; // THREEjs의 Rnederer를 저장할 변수입니다.
var scene = undefined;    // THREEjs의 Scene (객체를 표현할 공간)을 저장할 변수 입니다.
var camera = undefined;   // THREEjs의 Camera (객체의 움직임이나 형태를 보는 도구)를 저장할 변수 입니다.
var object = undefined;   // THREEjs의 Object (실제로 보여지는 물건)를 저장할 변수 입니다.

//해당 함수는 시작하는 순간 한번만 실행됩니다.
var setup = function() {

  //THREE js의 Main Renderer를 생성합니다.
  //THREE js의 Renderer에는 다양한 Option을 부여 할 수 있는데,
  //그 중 Alpha 값에 true를 부여할 경우 Render가 되는 Canvas 가 투명해져,
  //뒤에 있는 Canvas의 상태(이미지)도 볼 수 있습니다.
  //그 외의 옵션은 https://threejs.org/docs 를 확인하기 바랍니다.
  renderer = new THREE.WebGLRenderer({ alpha : false });

  //Renderer의 크기를 설정합니다. window.innerWidth와 window.innerHeight는 현재 켜져있는 창의
  //안쪽 높이와 넓이를 말합니다. 이 크기를 renderer의 크기에 적용합니다.
  renderer.setSize(window.innerWidth, window.innerHeight);

  //document몸통에 renderer의 domElement를 붙입니다.
  document.body.appendChild(renderer.domElement);

  //Perspective 카메라를 생성합니다. (화각, 종횡비, 촬영 가능한 최소거리, 촬영 가능한 최대거리)
  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1.0, 1000.0);

  //최초의 거리를 40만큼 설정합니다.
  camera.position.z = 40.0;

  //THREE js의 Scene은 물체의 움직을 표한하는 한 장면을 뜻합니다.
  scene = new THREE.Scene();

  //THREE js의 Object (물체)를 생성합니다.
  //물체는 하나 혹은 여러개의 Mesh로 이루어 집니다.
  object = new THREE.Object3D();

  //mesh를 생성하기위해 형태를 표현할 geometry와 재질을 표현할 material을 생성합니다.
  var geometry = new THREE.PlaneGeometry(2.0, 2.0); //종이처럼 납작한 형태를 생성합니다. (너비, 폭)
  var material = new THREE.MeshBasicMaterial({ color : "red" }); //빨간색 평평한 재질의 기본 Material을 생성합니다.

  //만들어진 geometry와 material을 사용하여 Mesh를 생성합니다.
  var mesh = new THREE.Mesh(geometry, material);

  //만들어진 mesh를 object에 추가합니다.
  object.add(mesh);

  //만들어진 object를 scene에 추가합니다.
  scene.add(object);

}


//해당 함수는 종료 될때까지 무한히 반복됩니다.
var update = function() {

  //원한다면 물체를 움직일 수도 있습니다.
  object.position.x += 0.01;

  // 물체들이 등장하는 Scene을 만들어진 Camera로 촬영합니다. (Rendering 합니다)
  renderer.render(scene, camera);

  //update함수를 호출하는것을 예약해둡니다. (재귀적 형태)
  requestAnimationFrame(update);
}

setup();
update();
