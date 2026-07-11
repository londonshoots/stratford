(function(){
    var script = {
 "start": "this.playAudioList([this.audio_5D3F9E79_5206_D80F_41C9_945A240CF7E8]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist,this.mainPlayList]); var self = this; this.autotriggerAtStart(this.mainPlayList, function(){ self.Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067.trigger('click') }, true); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Image_32384721_3C48_6560_41C9_CA1CAF581F0D",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "width": "100%",
 "layout": "absolute",
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "overflow": "visible",
 "minHeight": 20,
 "propagateClick": true,
 "class": "Player",
 "verticalAlign": "top",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundPreloadEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.15,
  "pitch": 0
 },
 "id": "camera_4810E8FA_520E_D902_41C8_9B5A851CF89F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -147.22,
    "targetPitch": 8.04,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 76.73,
    "pitchSpeed": 38.69
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -87.05,
    "targetPitch": 8.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
   "camera": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "thumbnailUrl": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_t.jpg",
 "partial": false,
 "label": "7",
 "id": "panorama_5F3568F5_520A_581B_41C9_6D528CA76E32",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
   "backwardYaw": 5.31,
   "yaw": -176.99,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90",
   "backwardYaw": 4.56,
   "yaw": -174.81,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_47899E3B_520A_F842_41D1_184100110874",
  "this.overlay_46BDC26B_520E_E8C1_41B0_46CF37F96B2B"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -66.82,
  "pitch": 7.79
 },
 "id": "panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.89,
    "targetPitch": 3.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.69,
  "pitch": 0
 },
 "id": "camera_48893882_520E_D902_41CB_C623FA15CA8F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -89.69,
    "targetPitch": -3.52,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 66.87,
    "pitchSpeed": 33.78
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -56.65,
    "targetPitch": -35.86,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 44.09,
    "targetPitch": 12.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 91.82,
    "targetPitch": -28.58,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 172.46,
    "targetPitch": 3.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -173.97,
  "pitch": 0.25
 },
 "id": "panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 55.65,
    "targetPitch": 2.58,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_5D3F9E79_5206_D80F_41C9_945A240CF7E8.mp3",
  "oggUrl": "media/audio_5D3F9E79_5206_D80F_41C9_945A240CF7E8.ogg"
 },
 "data": {
  "label": "DNGO - Get That (fin)"
 },
 "id": "audio_5D3F9E79_5206_D80F_41C9_945A240CF7E8",
 "autoplay": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.44,
  "pitch": 0
 },
 "id": "camera_4B69B7BA_520E_D702_41BD_76C892687963",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -69.84,
    "targetPitch": 0.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.47,
    "pitchSpeed": 17.16
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 35.05,
    "targetPitch": -1.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -175.94,
  "pitch": 0
 },
 "id": "camera_49DFB935_520E_DB06_41C0_C1FDFDAC824C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -66.82,
    "targetPitch": 7.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 50.78,
    "pitchSpeed": 25.77
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.89,
    "targetPitch": 3.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_t.jpg",
 "partial": false,
 "label": "2",
 "id": "panorama_5F335D78_520A_5809_41D1_2B08F3C614FE",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265",
   "backwardYaw": -175.31,
   "yaw": 173.85,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189",
   "backwardYaw": -102.71,
   "yaw": -86.38,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_409DB137_520A_E857_41D4_0C7FDBDFE617",
  "this.overlay_4032E3C0_520A_A82C_41CD_613D82D8394E"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.22,
  "pitch": 8.04
 },
 "id": "panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -87.05,
    "targetPitch": 8.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -120.42,
  "pitch": 0
 },
 "id": "camera_48C20842_520E_D902_41C9_F1329FE710AB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -8.04,
    "targetPitch": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 38.48,
    "pitchSpeed": 19.65
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 79.01,
    "targetPitch": -42.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 47.1,
    "targetPitch": -22.8,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.84,
  "pitch": 0.25
 },
 "id": "panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 35.05,
    "targetPitch": -1.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.69,
  "pitch": 0
 },
 "id": "camera_48ECD862_520E_D902_41C3_51A9C1660B2D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -69.84,
    "targetPitch": 0.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 24.22,
    "pitchSpeed": 12.56
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 35.05,
    "targetPitch": -1.44,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 0, 1)",
   "camera": "this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 1, 2)",
   "camera": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 2, 3)",
   "camera": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 3, 4)",
   "camera": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 4, 5)",
   "camera": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 5, 6)",
   "camera": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist, 6, 0)",
   "camera": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_camera"
  }
 ],
 "id": "ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.29,
  "pitch": 0
 },
 "id": "camera_48AB289F_520E_D902_41AA_8316BE40F872",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -20.85,
    "targetPitch": 1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 17.59,
    "pitchSpeed": 9.25
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 169.95,
    "targetPitch": -1.7,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 5.19,
  "pitch": 0
 },
 "id": "camera_4832D917_520E_DB02_41D2_C2D65CD5CA74",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -173.97,
    "targetPitch": 0.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 26.16,
    "pitchSpeed": 13.52
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 55.65,
    "targetPitch": 2.58,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "FadeOutEffect",
 "easing": "linear",
 "id": "effect_18641AD7_3C48_22B6_41A5_563FB35D86C6",
 "duration": 3000
},
{
 "class": "FadeInEffect",
 "easing": "linear",
 "id": "effect_18647AD7_3C48_22B6_41B0_45A8E5F85A17",
 "duration": 3000
},
{
 "thumbnailUrl": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_t.jpg",
 "partial": false,
 "label": "1",
 "id": "panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE",
   "backwardYaw": 173.85,
   "yaw": -175.31,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_433B6B62_520E_58EB_41B5_231CDB527063"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.64,
  "pitch": 0
 },
 "id": "camera_4876D8DC_520E_D907_41A6_F40650950EB5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -20.85,
    "targetPitch": 1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 2.73,
    "pitchSpeed": 1.86
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 169.95,
    "targetPitch": -1.7,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -8.04,
  "pitch": 0
 },
 "id": "panorama_5F31147E_520B_A809_41C1_8DC17595D48C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 79.01,
    "targetPitch": -42.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 47.1,
    "targetPitch": -22.8,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_t.jpg",
 "partial": false,
 "label": "6",
 "id": "panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32",
   "backwardYaw": -174.81,
   "yaw": 4.56,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
   "backwardYaw": 4.06,
   "yaw": -174.31,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_41201AB1_5206_785A_41D2_909017815DEB",
  "this.overlay_41373456_520A_A8C4_41B5_896FA4654E8C"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "thumbnailUrl": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_t.jpg",
 "partial": false,
 "label": "4",
 "id": "panorama_5F31147E_520B_A809_41C1_8DC17595D48C",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
   "backwardYaw": -128.59,
   "yaw": 59.58,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189",
   "backwardYaw": 169.36,
   "yaw": 176.4,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_40F56EDC_5239_F9D1_41D3_47D3B68B7E31",
  "this.overlay_40006D54_523F_B8D3_41BC_43F5A0DE2467",
  "this.overlay_41AC858A_5239_E835_41BC_8326E4A26A5A"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "gyroscopeEnabled": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_t.jpg",
 "partial": false,
 "label": "5",
 "id": "panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32",
   "backwardYaw": -176.99,
   "yaw": 5.31,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C",
   "backwardYaw": 59.58,
   "yaw": -128.59,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90",
   "backwardYaw": -174.31,
   "yaw": 4.06,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_404A437C_523B_A8CF_41BF_B4C07E27E26E",
  "this.overlay_41F53651_523A_68D9_41CC_47789260425C",
  "this.overlay_41CAA4A5_5207_E87A_4180_3825B821C022"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.85,
  "pitch": 1
 },
 "id": "panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 169.95,
    "targetPitch": -1.7,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "rollOverOpacity": 0.8,
 "label": "Media",
 "rollOverFontColor": "#FFFFFF",
 "selectedFontColor": "#FFFFFF",
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "class": "MenuItem",
   "label": "1",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "2",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "3",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "4",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "5",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "6",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "7",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "fontColor": "#FFFFFF",
 "id": "Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "backgroundColor": "#404040"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -3.6,
  "pitch": 0
 },
 "id": "camera_4B3A7800_520E_D8FF_41A7_E114C56E9900",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -8.04,
    "targetPitch": 0,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 2.48,
    "pitchSpeed": 1.74
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 79.01,
    "targetPitch": -42.14,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 47.1,
    "targetPitch": -22.8,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.69,
  "pitch": 0
 },
 "id": "camera_4B450794_520E_D706_41C0_0A83326F92B7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -66.82,
    "targetPitch": 7.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 50.21,
    "pitchSpeed": 25.49
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.89,
    "targetPitch": 3.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 93.62,
  "pitch": 0
 },
 "id": "camera_4B1277DE_520E_D703_41BF_667029926EB7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -147.22,
    "targetPitch": 8.04,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 130.16,
    "pitchSpeed": 65.28
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -87.05,
    "targetPitch": 8.1,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "thumbnailUrl": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_t.jpg",
 "partial": false,
 "label": "3",
 "id": "panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189",
 "hfovMin": "150%",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_t.jpg",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "rowCount": 4,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "height": 2048
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "rowCount": 2,
      "tags": "ondemand",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "height": 1024
     },
     {
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "height": 512
     }
    ]
   }
  }
 ],
 "cardboardMenu": "this.Menu_4B4A777D_520E_D706_41D3_0B98EC837B06",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE",
   "backwardYaw": -86.38,
   "yaw": -102.71,
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C",
   "backwardYaw": 176.4,
   "yaw": 169.36,
   "distance": 1
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_40DDA4F3_5206_A9D3_41C9_045DBB527E7F",
  "this.overlay_4099DB1E_5239_F852_41C7_826C9ADC3688"
 ],
 "pitch": 0,
 "hfov": 360,
 "class": "Panorama"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 51.41,
  "pitch": 0
 },
 "id": "camera_4855C8BF_520E_D902_4154_A3CF39D3136E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -66.82,
    "targetPitch": 7.79,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 54.92,
    "pitchSpeed": 27.83
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 3.89,
    "targetPitch": 3.08,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 3.01,
  "pitch": 0
 },
 "id": "camera_4B269822_520E_D903_41CD_78A7BBBF0E36",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -173.97,
    "targetPitch": 0.25,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 25.86,
    "pitchSpeed": 13.37
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 55.65,
    "targetPitch": 2.58,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear",
   "duration": 1000
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": -3.52,
   "targetStereographicFactor": 0,
   "duration": 3000
  }
 ],
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "yaw": -89.69,
  "stereographicFactor": 0.14,
  "pitch": -90,
  "hfov": 165
 },
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.69,
  "pitch": -3.52
 },
 "id": "panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": -56.65,
    "targetPitch": -35.86,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 44.09,
    "targetPitch": 12.12,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 91.82,
    "targetPitch": -28.58,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   },
   {
    "class": "TargetPanoramaCameraMovement",
    "targetYaw": 172.46,
    "targetPitch": 3.33,
    "path": "shortest",
    "easing": "cubic_in_out",
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05
   }
  ]
 }
},
{
 "transitionMode": "blending",
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "playbackBarHeadShadowVerticalLength": 0,
 "borderSize": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "minWidth": 100,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "height": "100%",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "paddingLeft": 0,
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "transitionDuration": 500,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "class": "ViewerArea",
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "maxHeight": 774,
 "height": "11.012%",
 "id": "Image_32384721_3C48_6560_41C9_CA1CAF581F0D",
 "left": "0.55%",
 "backgroundOpacity": 0,
 "width": "14.028%",
 "scaleMode": "fill",
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "url": "skin/Image_32384721_3C48_6560_41C9_CA1CAF581F0D.png",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "top",
 "top": "0.6%",
 "paddingRight": 0,
 "borderSize": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 0,
 "maxWidth": 1549,
 "data": {
  "name": "Image2900"
 }
},
{
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "backgroundOpacity": 0,
 "width": 115.05,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "top": "0%",
 "height": 641,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
  "this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "layout": "absolute",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "right": "0%",
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "bottom": 0,
 "height": 118,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "--MENU"
 }
},
{
 "maxHeight": 640,
 "id": "Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067",
 "left": "0.2%",
 "backgroundOpacity": 0,
 "scaleMode": "fill",
 "borderRadius": 0,
 "shadow": false,
 "right": "0.14%",
 "url": "skin/Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067.png",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "middle",
 "top": "14.18%",
 "bottom": "19.86%",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067, true, 0, this.effect_18647AD7_3C48_22B6_41B0_45A8E5F85A17, 'showEffect', false); this.setComponentVisibility(this.Image_1964F8AB_3DB8_6E81_41AF_2BD4A7EF9067, false, 7000, this.effect_18641AD7_3C48_22B6_41A5_563FB35D86C6, 'hideEffect', false)",
 "minWidth": 1,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 0,
 "maxWidth": 1872,
 "data": {
  "name": "Image61247"
 }
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton MUTE"
 },
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90, this.camera_4B69B7BA_520E_D702_41BD_76C892687963); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D9CEB1_5209_D844_41C9_DB2EA84FC489",
   "pitch": -35.11,
   "yaw": -174.81,
   "hfov": 14.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_47899E3B_520A_F842_41D1_184100110874",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.11,
   "hfov": 14.24
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D, this.camera_4B450794_520E_D706_41C0_0A83326F92B7); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D9EEB3_5209_D844_41C5_7A486DA4AED0",
   "pitch": -15.63,
   "yaw": -176.99,
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_46BDC26B_520E_E8C1_41B0_46CF37F96B2B",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.63,
   "hfov": 16.77
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265, this.camera_48893882_520E_D902_41CB_C623FA15CA8F); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41DBEEAA_5209_D845_41AC_AA173D677523",
   "pitch": -34.65,
   "yaw": 173.85,
   "hfov": 13.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_409DB137_520A_E857_41D4_0C7FDBDFE617",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.65,
   "hfov": 13.02
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189, this.camera_48AB289F_520E_D902_41AA_8316BE40F872); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D80EAD_5209_D85C_41BC_A089AF4356E0",
   "pitch": -6.88,
   "yaw": -86.38,
   "hfov": 13.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4032E3C0_520A_A82C_41CD_613D82D8394E",
 "data": {
  "label": "Circle Door 02"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -86.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.88,
   "hfov": 13.3
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE, this.camera_4810E8FA_520E_D902_41C8_9B5A851CF89F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41DDEEA6_5209_D84C_41BD_557F774C4449",
   "pitch": -35.61,
   "yaw": -175.31,
   "hfov": 14.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_433B6B62_520E_58EB_41B5_231CDB527063",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.61,
   "hfov": 14.16
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32, this.camera_4832D917_520E_DB02_41D2_C2D65CD5CA74); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D99EB1_5209_D844_41D0_5AADC2EA7DD9",
   "pitch": -23.55,
   "yaw": 4.56,
   "hfov": 15.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41201AB1_5206_785A_41D2_909017815DEB",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.55,
   "hfov": 15.96
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D, this.camera_49DFB935_520E_DB06_41C0_C1FDFDAC824C); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D9BEB1_5209_D844_41C4_59D5B13EE684",
   "pitch": -28.32,
   "yaw": -174.31,
   "hfov": 15.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41373456_520A_A8C4_41B5_896FA4654E8C",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -174.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.32,
   "hfov": 15.33
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D, this.camera_4855C8BF_520E_D902_4154_A3CF39D3136E); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D8BEAF_5209_D85C_41A8_4323F2E6473C",
   "pitch": -38.87,
   "yaw": 59.58,
   "hfov": 13.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_40F56EDC_5239_F9D1_41D3_47D3B68B7E31",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -38.87,
   "hfov": 13.55
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189, this.camera_4876D8DC_520E_D907_41A6_F40650950EB5); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D8CEAF_5209_D85C_41D1_C5D951573CD7",
   "pitch": -25.81,
   "yaw": 176.4,
   "hfov": 15.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_40006D54_523F_B8D3_41BC_43F5A0DE2467",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 176.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.81,
   "hfov": 15.67
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D8EEAF_5209_D85C_41C8_C72E28B676B0",
   "pitch": -20.28,
   "yaw": 24.91,
   "hfov": 16.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41AC858A_5239_E835_41BC_8326E4A26A5A",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.28,
   "hfov": 16.33
  }
 ],
 "rollOverDisplay": false
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton HS "
 },
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton GYRO"
 },
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 58,
 "borderSize": 0,
 "mode": "toggle",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 58,
 "data": {
  "name": "IconButton VR"
 },
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "backgroundOpacity": 0,
 "width": 58,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 58,
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "minWidth": 1,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png"
},
{
 "cursor": "hand",
 "maxHeight": 37,
 "data": {
  "name": "IconButton VR"
 },
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "backgroundOpacity": 0,
 "width": 100,
 "borderRadius": 0,
 "shadow": false,
 "right": 30,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "bottom": 8,
 "height": 75,
 "borderSize": 0,
 "mode": "push",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 0,
 "maxWidth": 49,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png"
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C, this.camera_48C20842_520E_D902_41C9_F1329FE710AB); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D90EAF_5209_D85C_41BB_94FDF62A8012",
   "pitch": -32.34,
   "yaw": -128.59,
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_404A437C_523B_A8CF_41BF_B4C07E27E26E",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.34,
   "hfov": 14.71
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90, this.camera_48ECD862_520E_D902_41C3_51A9C1660B2D); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D95EB1_5209_D844_4191_58EA1AB6FD04",
   "pitch": -34.35,
   "yaw": 4.06,
   "hfov": 14.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41F53651_523A_68D9_41CC_47789260425C",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.35,
   "hfov": 14.37
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F3568F5_520A_581B_41C9_6D528CA76E32, this.camera_4B269822_520E_D903_41CD_78A7BBBF0E36); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D97EB1_5209_D844_41C3_BD5C5D9080DF",
   "pitch": -14.76,
   "yaw": 5.31,
   "hfov": 16.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41CAA4A5_5207_E87A_4180_3825B821C022",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.76,
   "hfov": 16.84
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F31147E_520B_A809_41C1_8DC17595D48C, this.camera_4B3A7800_520E_D8FF_41A7_E114C56E9900); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D87EAD_5209_D85C_41A4_DDDE470BD822",
   "pitch": -27.57,
   "yaw": 169.36,
   "hfov": 15.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_40DDA4F3_5206_A9D3_41C9_045DBB527E7F",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 169.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.57,
   "hfov": 15.43
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_5F335D78_520A_5809_41D1_2B08F3C614FE, this.camera_4B1277DE_520E_D703_41BF_667029926EB7); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_41D89EAD_5209_D85C_41D1_9A758B8C836D",
   "pitch": -27.82,
   "yaw": -102.71,
   "hfov": 15.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4099DB1E_5239_F852_41C7_826C9ADC3688",
 "data": {
  "label": "Arrow 07a"
 },
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.82,
   "hfov": 15.4
  }
 ],
 "rollOverDisplay": false
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "backgroundOpacity": 0,
 "width": 110,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "right": "0%",
 "overflow": "visible",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "top": "0%",
 "height": 110,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "button menu sup"
 }
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_4164EA8B_5206_5856_41CA_D7D9726EB929",
  "this.Image_461EC4F9_521B_A9B1_41D0_EFC842130D35",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "height": "85.959%",
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "backgroundOpacity": 0,
 "width": "91.304%",
 "layout": "vertical",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "right": "0%",
 "overflow": "scroll",
 "minHeight": 1,
 "paddingBottom": 0,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "top",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "contentOpaque": false,
 "visible": false,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "data": {
  "name": "-button set"
 }
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "backgroundOpacity": 0,
 "width": 1199,
 "layout": "horizontal",
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Container",
 "verticalAlign": "middle",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "height": 51,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 30,
 "minWidth": 1,
 "data": {
  "name": "-button set container"
 }
},
{
 "id": "ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185",
 "left": "0%",
 "width": "92.241%",
 "scrollBarWidth": 8,
 "itemLabelFontColor": "#FFFFFF",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 0,
 "itemLabelGap": 9,
 "paddingBottom": 10,
 "playList": "this.ThumbnailList_3347054F_3DCB_18F2_41A6_2E7B91F17185_playlist",
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 20,
 "itemThumbnailShadowColor": "#000000",
 "verticalAlign": "top",
 "selectedItemLabelFontColor": "#FFCC00",
 "itemPaddingBottom": 3,
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "itemLabelFontStyle": "normal",
 "itemThumbnailHeight": 75,
 "scrollBarColor": "#FFFFFF",
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "height": 124,
 "itemOpacity": 1,
 "gap": 10,
 "paddingRight": 20,
 "itemThumbnailShadowVerticalLength": 3,
 "itemLabelFontFamily": "Arial",
 "itemThumbnailWidth": 75,
 "itemBorderRadius": 0,
 "itemThumbnailShadowOpacity": 0.54,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "paddingLeft": 20,
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadow": true,
 "layout": "horizontal",
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 50,
 "shadow": false,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "class": "ThumbnailList",
 "top": "-5.13%",
 "itemBackgroundColorRatios": [],
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "itemThumbnailOpacity": 1,
 "itemPaddingRight": 3,
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "horizontalAlign": "left",
 "scrollBarMargin": 0,
 "itemThumbnailShadowBlurRadius": 8,
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": "12px",
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemThumbnailScaleMode": "fit_outside"
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D9CEB1_5209_D844_41C9_DB2EA84FC489",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3568F5_520A_581B_41C9_6D528CA76E32_0_HS_1_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D9EEB3_5209_D844_41C5_7A486DA4AED0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41DBEEAA_5209_D845_41AC_AA173D677523",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F335D78_520A_5809_41D1_2B08F3C614FE_0_HS_1_0.png",
   "width": 800,
   "height": 1200
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D80EAD_5209_D85C_41BC_A089AF4356E0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5C8EEE2C_520A_B809_41A0_81F9C3F31265_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41DDEEA6_5209_D84C_41BD_557F774C4449",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D99EB1_5209_D844_41D0_5AADC2EA7DD9",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3C2AFA_520A_7808_41D2_FD4600E16C90_0_HS_1_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D9BEB1_5209_D844_41C4_59D5B13EE684",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D8BEAF_5209_D85C_41A8_4323F2E6473C",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_1_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D8CEAF_5209_D85C_41D1_C5D951573CD7",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F31147E_520B_A809_41C1_8DC17595D48C_0_HS_2_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D8EEAF_5209_D85C_41C8_C72E28B676B0",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D90EAF_5209_D85C_41BB_94FDF62A8012",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_1_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D95EB1_5209_D844_4191_58EA1AB6FD04",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F30923A_520B_E809_41D2_DD8942CF0C0D_0_HS_2_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D97EB1_5209_D844_41C3_BD5C5D9080DF",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0_HS_0_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D87EAD_5209_D85C_41A4_DDDE470BD822",
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_5F3766D1_520B_A81B_41C6_0CB770FC8189_0_HS_1_0.png",
   "width": 1040,
   "height": 900
  }
 ],
 "colCount": 4,
 "id": "AnimatedImageResource_41D89EAD_5209_D85C_41D1_9A758B8C836D",
 "frameDuration": 41
},
{
 "paddingLeft": 0,
 "maxHeight": 60,
 "data": {
  "name": "image button menu"
 },
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "backgroundOpacity": 0,
 "width": 60,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": true,
 "height": 60,
 "borderSize": 0,
 "mode": "toggle",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingRight": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png"
},
{
 "paddingLeft": 0,
 "maxHeight": 42,
 "data": {
  "name": "IconButtonFB link"
 },
 "id": "IconButton_4164EA8B_5206_5856_41CA_D7D9726EB929",
 "backgroundOpacity": 0,
 "width": 42,
 "paddingBottom": 0,
 "borderRadius": 0,
 "shadow": false,
 "minHeight": 1,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "transparencyActive": false,
 "height": 42,
 "borderSize": 0,
 "mode": "push",
 "click": "this.openLink('https://www.facebook.com/profile.php?id=100066450825857', '_blank')",
 "paddingRight": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 42,
 "iconURL": "skin/IconButton_4164EA8B_5206_5856_41CA_D7D9726EB929.png"
},
{
 "cursor": "hand",
 "maxHeight": 100,
 "height": "100%",
 "id": "Image_461EC4F9_521B_A9B1_41D0_EFC842130D35",
 "backgroundOpacity": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 0,
 "url": "skin/Image_461EC4F9_521B_A9B1_41D0_EFC842130D35.png",
 "minHeight": 1,
 "propagateClick": false,
 "class": "Image",
 "verticalAlign": "middle",
 "paddingRight": 0,
 "borderSize": 0,
 "click": "this.openLink('https://londonshoot.com', '_blank')",
 "minWidth": 1,
 "horizontalAlign": "center",
 "paddingTop": 0,
 "paddingLeft": 0,
 "maxWidth": 100,
 "data": {
  "name": "Image LS website link"
 }
}],
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "vrPolyfillScale": 0.51,
 "paddingRight": 0,
 "gap": 10,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "scripts": {
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "paddingTop": 0,
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
