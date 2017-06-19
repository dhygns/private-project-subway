import THREE from "n3d-threejs"
import SUBWAY from "./../datas/SubwayStations.js"


class Subway {
  constructor() {
    this.tex = new THREE.WebGLRenderTarget(
      window.innerWidth, window.innerHeight, {
        minFilter : THREE.LinearFilter,
        magFilter : THREE.LinearFilter
      }
    );

    this.camera = new THREE.PerspectiveCamera(
      45, window.innerWidth / window.innerHeight, 1.0, 2000.0);
    this.camera.position.z = 300.0;

    // this.textureloader = new THREE.TextureLoader();
    // this.textureloader.load("img/subway.jpg", (img) => {
    //   img.minFilter = THREE.LinearFilter;
    //   img.magFilter = THREE.LinearFilter;
    //
    //   this.background = new THREE.Object3D();
    //   this.background.add(new THREE.Mesh(
    //     new THREE.PlaneGeometry(2.0, 2.0),
    //     new THREE.MeshBasicMaterial({ map : img })
    //   ));
    //
    //   this.background.scale.x = img.image.width / 10.0;
    //   this.background.scale.y = img.image.height / 10.0;
    //
    //   this.background.position.z = -1;
    //   this.scene.add(this.background);
    // })


    //
    // document.addEventListener("mousemove", ({pageX, pageY}) => {
    //   this.camera.position.x += pageX / window.innerWidth - 0.5;
    //   this.camera.position.y -= pageY / window.innerHeight - 0.5;
    // });

    this.scene = new THREE.Scene();
    this.line2station = [];

    SUBWAY.loader.onload = (data) => {
      data[0].logicalInfo.forEach((obj) => {
        var object = new THREE.Object3D();
        object.add(new THREE.Mesh(
          new THREE.PlaneGeometry(2.0, 2.0),
          new THREE.MeshBasicMaterial({color : "gray" })
        ));
        var vec = new THREE.Vector2(obj.imagePosX, obj.imagePosY);
        vec.x -= 0.5 * 3781; vec.y -= 0.5 * 2933;

        object.position.x = vec.x / 12.0;
        object.position.y = vec.y / 12.0;
        this.scene.add(object);
      });
    };
    // for(var sn in SUBWAY.line2.station) {
    //   const station = SUBWAY.line2.station[sn];
    //   const idx = this.line2station.push(new THREE.Object3D()) - 1;
    //   const obj = this.line2station[idx];
    //   obj.add(new THREE.Mesh(
    //     new THREE.PlaneGeometry(2.0, 2.0),
    //     new THREE.MeshBasicMaterial({color : SUBWAY.line2.color})
    //   ))
    //   obj.position.x = station.x;
    //   obj.position.y = station.y;
    //   this.scene.add(obj);
    // }
    //1~9: 1~9호선, I: 인천1호선, K: 경의중앙선, B: 분당선, A: 공항철도, G: 경춘선, S:신분당선, SU:수인선
    // this.lines = {};
    //
    // this.lines["1"]  = new SubwayLine("#00498B");
    // this.lines["2"]  = new SubwayLine("#009246");
    // this.lines["3"]  = new SubwayLine("#F36630");
    // this.lines["4"]  = new SubwayLine("#00A2D1");
    // this.lines["5"]  = new SubwayLine("#5940FF");
    // this.lines["6"]  = new SubwayLine("#CC660D");
    // this.lines["7"]  = new SubwayLine("#4D8000");
    // this.lines["8"]  = new SubwayLine("#FF33A6");
    // this.lines["9"]  = new SubwayLine("#8E764B");
    //
    // this.lines["I"]  = new SubwayLine("#6E98BB");
    // this.lines["K"]  = new SubwayLine("#72C7A6");
    // this.lines["B"]  = new SubwayLine("#E0A134");
    // this.lines["A"]  = new SubwayLine("#0065B3");
    // this.lines["G"]  = new SubwayLine("#32c6a6");
    // this.lines["S"]  = new SubwayLine("#BB1833");
    // this.lines["SU"] = new SubwayLine("#E0A134");

  };

  update(dt) {
    this.scene.children.forEach((obj)=>{
      if(obj.update != undefined) obj.update(dt);
    });
  }

  render(rdrr) {
    rdrr.render(this.scene, this.camera, this.tex);
  }

  get texture() { return this.tex; }
}

export default Subway;
