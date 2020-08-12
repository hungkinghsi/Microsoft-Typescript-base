//ClassA
package{
    internal class ClassA extends Object implements IClassA{
      public function ClassA():void{
        _value=1;
      }
      private var _value:int;
      public function get value():int{
        return _value;
      }
      public function set value(value:int):void{
        _value=value;
      }
    }
  }