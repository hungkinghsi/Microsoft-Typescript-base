class Person {
  function Person() {
     secret = "I am a mass murderer.";
  }
  function speak() {
     print("Don't make me tell you my secret! "+secret);
  }
}

var bob = new Person();
print(bob.secret); // undefined
bob.speak(); // prints "Don't make me tell you my secret! I am a mass murderer."

class Dog : MonoBehaviour { // this means Dog derives from MonoBehaviour
   public void Bark() { // These are methods of Dog.  Note that they are automatically public.
       Debug.Log("Woof!");
   }
   public void Wait() {
       while () {
       }
   }
   public void PlayDead() {
       Application.Quit();
   }
}