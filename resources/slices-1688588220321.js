(function(window, undefined) {
  var dictionary = {
    "s-f0ce587a-35b0-4c10-be26-a8b081394f66 s-Slice_2": [ ["Slice 2@1x.png", "c996182b-ba0e-419b-952f-976a4de18efb_1.png"] ]
  };

  window.jimDevelopers.lookUpSlice = function(name) {
    var imageName;
    if(dictionary.hasOwnProperty(name)) { /* search by name */
      imageName = dictionary[name];
    }
    return imageName;
  };
})(window);