var textfile;
var dispFileSystem = new ActiveXObject("Scripting.FileS ystemObject");
dispFileSystem.OpenTextFile("C:\\text.dat",2,true);
textfile.Write("Hello\tIndeex\n");
textfile.Write("Hello\tWorld\n");
textfile.Close();