var APP_DATA = {
  "scenes": [
    {
      "id": "0-out-01",
      "name": "OUT 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5876614452835316,
          "pitch": 0.10312367013225732,
          "rotation": 0,
          "target": "2-out-02"
        },
        {
          "yaw": 0.0377319364748665,
          "pitch": 0.1323609681462905,
          "rotation": 0,
          "target": "1-in"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-in",
      "name": "IN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.464304164691006,
          "pitch": 0.12482674136527905,
          "rotation": 0,
          "target": "2-out-02"
        },
        {
          "yaw": -1.344064591414817,
          "pitch": 0.16983362955311776,
          "rotation": 0,
          "target": "0-out-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-out-02",
      "name": "OUT 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7739938822385843,
          "pitch": 0.3267051645191845,
          "rotation": 0,
          "target": "1-in"
        },
        {
          "yaw": 2.4537667028646126,
          "pitch": 0.21733401708157274,
          "rotation": 0,
          "target": "0-out-01"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "E HOUSE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
