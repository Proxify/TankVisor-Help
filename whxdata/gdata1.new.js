(function() {
var glossary =  {"type":"data","entrys":[{"type":"entry","name":"Hi-Res Table","value":"The Hi-Res Table can be found on a Tank's Detail screen. Similar to the Strapping Table, it holds the translation map for TankVisor, but at a higher resolution (1/16th inches, rather than inches)."},{"type":"entry","name":"Strapping Table","value":"The Strapping Table can be found on a Tank's Detail screen. It holds the translation map for TankVisor. You can think of it in a way of, \"If I'm reading 'X' many inches, the corresponding volume is 'Y'\". "},{"type":"entry","name":"control","value":"If used in the context of TankVisor, a control is simply a UI element that is being displayed to the user."}]};
window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), glossary, { sync:true });
})();
