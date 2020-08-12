//ClassB
  package{
   internal class ClassB extends Object implements IClassB{
      public function ClassB(value:int):void{
        _value=value;
      }
      private var_value:int;
      public function get value():int{
        return _value;
      }
      public function set value(value:int):void{
        _value=value;
      }
    }
  }