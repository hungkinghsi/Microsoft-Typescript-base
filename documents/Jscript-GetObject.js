var MyObject;
MyObject = GetObject("C:\\DRAWINGS\\indeex.DRW", "wahaha.DRAWING");
MyObject.Line(9, 90);
MyObject.InsertText(9, 100, "Hello, Indeex.");
MyObject.SaveAs("C:\\DRAWINGS\\indeex.DRW");