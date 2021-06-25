rh._.exports({"0":[["Tank Configuration"]],"1":[["\n  "],["\n  ","This article references ","Strapping Tables",", ","Tank Detail",", and ","TankMini",".","\n  "],["\n  ","The Tank Configuration panel contains all of the information for how a specific tank should communicate with the DCS, including which 'point.parameters' should be used for I/O.","\n  ","When appropriate and valid information is entered into the Tank Configuration panel, TankVisor will use this information along with the ","Strapping Table","The Strapping Table can be found on a Tank's Detail screen. It holds the translation map for TankVisor. You can think of it in a way of, \"If I'm reading 'X' many inches, the corresponding volume is 'Y'\". "," and ","Hi-Res Table","The Hi-Res Table can be found on a Tank's Detail screen. Similar to the Strapping Table, it holds the translation map for TankVisor, but at a higher resolution (1/16th inches, rather than inches)."," maps to determine which value to output back to the DCS.","\n  ","A full list of the parameter definitions can be found ","Tank Configuration",".","\n  "," ","\n  "],["\n  ","The Tank Configuration panel can be found on the left side of any ","Tank Detail"," screen.","\n  ","\n  "," ","\n  "],["\n  ","\n    ","\n      ","\n      ","\n    ","\n    ","\n      ","\n        ","\n          ","Tank Title","\n        ","\n        ","\n          Indicates the title of the tank within TankVisor.","\n          ","Note does not necessarily have to match the tank's pointname on the DCS",".\n        ","\n      ","\n      ","\n        ","\n          ","Critical Zone","\n        ","\n        ","\n          ","The critical zone is a integer value.","\n            ","\n            If the input / read value for \"","[InputPointName]/[Input Parameter Path]","\" from the DCS is less than or equal to the Critical Zone value, then a calculation is performed to determine the returned output to the DCS as opposed to looking up the value from the Strapping Table.","\n            ","\n            ","\n            When within the critical zone, the following calculation is used:\n          ","\n          ","Returned output => ((X * 16) + Y) * Z","\n          ","Where:","\n          ","X is the INCHES from the DCS","\n          ","Y is the HI-RES reading from DCS (ex. 1/16th of an inch)","\n          ","Z is the 1st index in the HI-RES table (ex. The value of 1/16th within the HI-RES table)","\n        ","\n      ","\n      ","\n        ","\n          ","Enable Logic Path","\n        ","\n        ","\n          ","The value entered for '","Enable Logic Path","' should be the fully qualified or absolute path to the \"","Enable","\" parameter on the tank's control module within the DCS. This value is used to determine if TankVisor should execute this tank's strapping logic.","\n          ","The returned value from the DCS must be an integer.","\n            ","\n            ","This is often used to indicate the Tank Mode, such as roof positioning being HIGH or LOW.","\n          ","\n        ","\n      ","\n      ","\n        ","\n          ","Tank Mode To Enable Logic","\n        ","\n        ","\n          ","The value for \"","Tank Mode To Enable Logic\""," must be an integer.","\n            ","\n            This integer value, determined by the user, will be used to indicate when TankVisor's strapping logic should execute for this tank.\n          ","\n        ","\n      ","\n      ","\n        ","\n          ","Logic Enabled","\n        ","\n        ","\n          ","A ","True"," or ","False"," value will be indicated.","\n            ","\n            If the value entered in \"","Tank Mode To Enable Logic","\" is equal to the returned DCS value from the qualified \"","Enable Logic Path","\", then and only then will the strapping logic for this tank will execute and the ","\"","Logic Enabled","\" TextBox will indicate ","True",".\n          ","\n          ","If the above conditions are not met, then the TextBox will display ","False"," as well as show a dark grey border around the output to the ","TankMini"," display.","\n            ","\n             ","\n          ","\n        ","\n      ","\n      ","\n        ","\n          ","Input PointName (Read)","\n        ","\n        ","\n          ","\n            The name of the control module that houses the parameter TankVisor should use to ","read"," the tank's level (","ex. inches",").","\n            This should ","not"," include the parameter path, just point / module name.","\n        ","\n      ","\n      ","\n        ","\n          ","Input Parameter Path (Read)","\n        ","\n        ","\n          ","\n            The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","read"," the tank's level (","ex. inches",").","\n        ","\n      ","\n      ","\n        ","\n          ","High Res. Input PointName (Read)","\n        ","\n        ","\n          ","\n            The name of the control module that houses the parameter TankVisor should use to ","read"," the tank's ","high-res"," level (","ex. 1/16th inch",").","\n            This should ","not"," include the parameter path, just point / module name.","\n        ","\n      ","\n      ","\n        ","\n          ","High Res. Input Parameter Path (Read)","\n        ","\n        ","\n          ","\n            The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","read"," the tank's ","high-res"," level (","ex. 1/16th inch",").","\n        ","\n      ","\n      ","\n        ","\n          ","Output PointName (Write)","\n        ","\n        ","\n          ","\n            The name of the control module that houses the parameter TankVisor should use to ","write"," out the tank's ","volume",".","\n            This should ","not"," include the parameter path, just point / module name.","\n        ","\n      ","\n      ","\n        ","\n          ","Output Parameter Path (Write)","\n        ","\n        ","\n          ","\n            The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","write"," out the tank's ","volume",".","\n        ","\n      ","\n      ","\n        ","\n          ","Scratch Mode Path","\n        ","\n        ","\n          ","\n            The value entered for '","Scratch Mode Path","' should be the fully qualified or absolute path to the \"","Scratch Mode","\" parameter on the tank's control module within the DCS.","\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n          ","This value represents which mode the Scratch Calculation should be in.","\n          ","The following modes exist:","\n          ","\n            ","To Volume","\n            ","To Metric","\n          ","\n          ","More details below","...","\n        ","\n      ","\n      ","\n        ","\n          ","Tank Mode To Enable 'To Volume' Mode","\n        ","\n        ","\n          ","\n            An integer value.","\n            ","\n            The value entered here should represent the value at which the DCS result of \"","Scratch Mode Path","\" should trigger the \"To ","Volume","\" mode within TankVisor's Scratch Pad logic.\n          ","\n          ","(","Ex. if the value \"0\" is entered into this textbox, the result of \"Scratch Mode Path\" must be \"0\" for the Scratch Pad logic to be in \"To ","Volume","\" mode.",")","\n          "," ","\n          ","The \"To Volume\" mode indicates that the Scratch Pad logic will take the DCS result values for \"","[Input Scratch PointName]/[Input Scratch Parameter Path]","\" and \"","[High Res. Input Scratch PointName]/[High Res. Input Scratch Param Path]","\" (","Ex. Inches, 1/16th inches, respectively",") and determine the output to the DCS using the ","Strapping Tables",". This value is sent as an output to \"[","Output Scratch PointName]/[Output Scratch Parameter Path]","\" (","Ex. Volume",").","\n        ","\n      ","\n      ","\n        ","\n          ","Tank Mode To Enable 'To Metric' Mode","\n        ","\n        ","\n          ","\n            An integer value.","\n            ","\n            The value entered here should represent the value at which the DCS result of \"","Scratch Mode Path","\" should trigger the \"To ","Metric","\" mode within TankVisor's Scratch Pad logic.\n          ","\n          ","(","Ex. if the value \"1\" is entered into this textbox, the result of \"Scratch Mode Path\" must be \"1\" for the Scratch Pad logic to be in \"To ","Metric","\" mode.",")","\n          "," ","\n          ","The \"To Metric\" mode indicates that the Scratch Pad logic will take the DCS result values for \"","[","Output Scratch PointName]/[Output Scratch Parameter Path]","\" (","Ex. Volume",") and perform an inverse calculation on the ","Strapping Table","s",". The result of this inverse calculation is sent as an output to \"","[","Input Scratch PointName]/[Input Scratch Parameter Path]","\" (","Ex. Inches",").","\n          ","(","Ex. if in \"To Metric\" mode, and the Volume read is \"29.4\", in the example below the Inches written back to the DCS would be \"18\"",")","\n            ","\n          ","\n        ","\n      ","\n      ","\n        ","\n          ","Input Scratch PointName (Read)","\n        ","\n        ","\n          ","\n            The name of the control module that houses the parameter TankVisor should use to ","read"," the tank's Scratch level (","ex. inches",").","\n            This should ","not"," include the parameter path, just point / module name.","\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n      ","\n        ","\n          ","Input Scratch Parameter Path (Read)","\n        ","\n        ","\n          The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","read"," the tank's ","Scratch ","level (","ex. inches",").\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n      ","\n        ","\n          ","High Res. Input Scratch PointName (Read)","\n        ","\n        ","\n          The name of the control module that houses the parameter TankVisor should use to ","read"," the tank's ","high-res"," Scratch"," level (","ex. 1/16th inch",").","\n          This should ","not"," include the parameter path, just point / module name.\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n      ","\n        ","\n          ","High Res. Input Scratch Param Path (Read)","\n        ","\n        ","\n          The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","read"," the tank's ","high-res Scratch"," level (","ex. 1/16th inch",").\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n      ","\n        ","\n          ","Output Scratch PointName (Write)","\n        ","\n        ","\n          The name of the control module that houses the parameter TankVisor should use to ","write"," out the tank's ","Scratch ","volume",".","\n          This should ","not"," include the parameter path, just point / module name.\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n      ","\n        ","\n          ","Output Scratch Parameter Path (Write)","\n        ","\n        ","\n          The fully qualified or absolute path, minus the module name, to the parameter TankVisor should use to ","write"," out the tank's ","Scratch ","volume",".\n          ","Note that Scratch Pad entries are entered by the operator and are not live readings from an instrument.","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n\n"]],"2":[["Tank Configuration"]],"3":[["What is Tank Configuration and what references it?"],["Where can it be found?"],["Configuration definitions"]],"id":"7"})