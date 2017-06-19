import * as $ from "jquery"


class SubwayStation {
}

class Loader {
  constructor () {
    $.getJSON("./res/stations.json", (data) => {
      this.data = data;
      this.onload(data);
    });
  }
}

export default { loader : new Loader() }
