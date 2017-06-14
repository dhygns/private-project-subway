
class Station {
  constructor(name, x, y, code) {
    this.name = name;

    this.x = x;
    this.y = y;
    this.code = code;

    this._next = [];
    this._prev = [];
  }

  connect(other) { this._next.push(other); other._prev.push(this); }

  getNext(idx) {
    if(idx == undefined) idx = (Math.random() * this._next.length) << 0;
    return this._next[idx];
  }

  getPrev(idx) {
    if(idx == undefined) idx = (Math.random() * this._prev.length) << 0;
    return this._prev[idx];
  }
}

class Line {
  constructor(number, color) {
    this.number = number;
    this.color = color;
    this.headstation = this.currstation = undefined;
    this.stationlist = {};
  }

  addTail(name, x, y, code) {
    var tmpstati = new Station(name, x, y, code);

    if(this.currstation == undefined) {
      this.headstation = this.currstation = tmpstati;
    }
    else {
      this.currstation.connect(tmpstati);
      this.currstation = this.currstation.getNext(0);
    }

    this.stationlist[name] = tmpstati;

    return this;
  }

  get station() { return this.stationlist; }
}

var line2 = new Line(2, "#009246");
line2.addTail("신도림", -78.7, -26.0, "0200");
line2.addTail("문래", -78.7, -15.5, "0200");
line2.addTail("영등포구청", -78.7, -9, "0200");
line2.addTail("당산", -78.7,  3, "0200");
line2.addTail("합정", -78.7, 20, "0200");
line2.addTail("홍대입구", -78.0, 38, "0200");
line2.addTail("신촌", -74.0, 48, "0200");
line2.addTail("이대", -65.0, 55.5, "0200");
line2.addTail("아현", -53.0, 57.8, "0200");
line2.addTail("충정로", -41.5, 57.8, "0200");
line2.addTail("시청", -24.5, 57.8, "0200");
line2.addTail("을지로입구", -15.0, 57.8, "0200");
line2.addTail("을지로3가", -8.0, 57.8, "0200");
line2.addTail("을지로4가", 0, 0, "0200");
line2.addTail("동대문역사문화공원", 0, 0, "0200");
line2.addTail("신당", 0, 0, "0200");
line2.addTail("상왕십리", 0, 0, "0200");
line2.addTail("왕십리", 0, 0, "0200");
line2.addTail("한양대", 0, 0, "0200");
line2.addTail("뚝섬", 0, 0, "0200");
line2.addTail("성수", 0, 0, "0200");
line2.addTail("건대입구", 0, 0, "0200");
line2.addTail("구의", 0, 0, "0200");
line2.addTail("강변", 0, 0, "0200");
line2.addTail("잠실나루", 0, 0, "0200");
line2.addTail("잠실", 0, 0, "0200");
line2.addTail("잠실새내", 0, 0, "0200");
line2.addTail("종합운동장", 0, 0, "0200");
line2.addTail("삼성", 0, 0, "0200");
line2.addTail("선릉", 0, 0, "0200");
line2.addTail("역삼", 0, 0, "0200");
line2.addTail("강남", 0, 0, "0200");
line2.addTail("교대", 0, 0, "0200");
line2.addTail("서초", 0, 0, "0200");
line2.addTail("방배", 0, 0, "0200");
line2.addTail("사당", 0, 0, "0200");
line2.addTail("낙성대", 0, 0, "0200");
line2.addTail("서울대입구", 0, 0, "0200");
line2.addTail("봉천", 0, 0, "0200");
line2.addTail("신림", 0, 0, "0200");
line2.addTail("신대방", 0, 0, "0200");
line2.addTail("구로디지털단지", 0, 0, "0200");
line2.addTail("대림", 0, 0, "0200");
line2.station["대림"].connect(line2.station["신도림"]);

export default {line2}
