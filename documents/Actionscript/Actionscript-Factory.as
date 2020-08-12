//Factory
package{
  public class ClassFactory extends Object{
    public function ClassFactory():void{}
    public static function createClassA():IClassA{
      return new ClassA();
    }
    public static function createClassB(value:int):IClassB{
      return new ClassB(value);
    }
  }
}