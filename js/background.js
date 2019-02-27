/**
 * background.js
 */
let controls = [];

window.addEventListener("keydown", function(e){

    if(e.ctrlKey){

      let doc = URL.createObjectURL( new Blob([controls.toString()], {type: 'application/octet-binary'}) );
      var aElement = document.createElement('a');
      aElement.href = doc;
      aElement.download = 'move.csv';

      aElement.click();

      controls = [];
      return;
    }
    console.log("キー", e.key);
    controls.push(e.key);
});

