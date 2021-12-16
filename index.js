require.config({
  baseUrl: "./lib"
});
require(["loader", "urlSearchParse"], function(AMapLoader, urlSearchParse) {
  var version = urlSearchParse("v");
  var key = urlSearchParse("key") || "ba5f2d926220e97b20cc496328990682";
  var config = {
    key: key, // 申请好的Web端开发者Key，首次调用 load 时必填
    plugins: [
      "AMap.ToolBar",
      "AMap.Scale",
      "AMap.Geocoder",
      "AMap.CustomLayer",
      "AMap.ControlBar",
      "AMap.Heatmap",
      "AMap.DistrictSearch",
      "AMap.AdvancedInfoWindow",
      "AMap.MassMarks",
      "AMap.Size",
      "AMap.Pixel",
      "AMap.Driving",
      "AMap.TruckDriving",
      "AMap.DragRoute",
      "AMap.MoveAnimation"
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    AMapUI: {
      // 是否加载 AMapUI，缺省不加载
      version: "1.1", // AMapUI 缺省 1.1
      plugins: ["overlay/SimpleMarker"] // 需要加载的 AMapUI ui插件
    }
  };
  if (version === "2") {
    config.version = "2.0"; // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    config.Loca = {
      // 是否加载 Loca， 缺省不加载
      version: "2.0.0" // Loca 版本，缺省 1.3.2
    };
  }
  AMapLoader.load(config)
    .then(function(AMap) {
      new AMap.Map("container");
    })
    .catch(function(e) {
      console.log(e);
    });
});
