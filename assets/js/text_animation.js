new TypeIt("#greeting", {
    strings: "hello! :)",
    speed: 250,
    loop: false,
    startDelay: 1100,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();
