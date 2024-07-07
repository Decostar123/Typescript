// CLASS SYNTAC IN TYPESCRIPT 
// we do not use classes much in our project 

// classes in javascrpit search as blueprint for creating object 

class Book {
    readonly title: string;
    public author: string;
    private checkedout : boolean ;
    // i can do like checkedout  = false ;
     // but we can also rely on the fact theat typescript is going to infer the value 
    //  be careful when typescript infers the type of the potential pitfalls we might face 
    

// this declartion syntax is much like interfaces for type 



    // constructio called automatically wen we cereate class 
    constructor(title: string, author: string) {
        // this refers to the object we have created 
      this.title = title;
      this.author = author;
      this.checkedout = false ;
   
    }
    changeValue( val : string){
        // this.title = val ; 
        // Cannot assign to 'title' because it is a read-only property.ts(2540)

    }
    checkOut(){
        this.checkedout = true;
        // we can not acces the poerty from the outside of the method checkOut 
    }

    public isCheckedOut(){
        return this.checkedout ;
    }
    public toggleCheckdOutStatus(){
        return !this.isCheckedOut ; 
    }
  }
  
  const deepWork = new Book('deep work ', 'cal newport');

  console.log(deepWork);

  
//   the idea is we set the properties inside the class instead of constructor 
// and they get added to all the instances we created 

//   in classes we also have read only modifier which does exactly what the name suggest 
// we can not modify the property if we added the read only modifier 

// deepWork.title = "something else "
// this is incorrect and will give erro 

// we also have the private and the public modifier 
// which control whether we can access the property or the method from the outside 

// by default evrything is public 

// if i declared a varble as private I can not access it outsdie from the class 
// but can modify it from inside the class unlike the read only 
// concept of getter setter you know 
// deepWork.checkedout // this is oming error 

deepWork.checkOut() ; 
console.log(deepWork);

// we declared the varible as private ten we set up a method whic control the values 
 
// now it's normal  like invoking function 


deepWork.toggleCheckdOutStatus() ; 
console.log(deepWork.isCheckedOut());

deepWork.toggleCheckdOutStatus() ; 
console.log(deepWork.isCheckedOut());



// getters and setters are special properties which give access to the methods 

// In TypeScript, if you want to use the shorthand for creating and initializing class
//  properties in the constructor, you need to use public, private, or protected access modifiers.
// BY HELP OF PBIDUFER IN THE CONSTRUCTOR WE CAN DECLARE VARIBLE + ASSIGN THE PROPERTIES OF THE VARIBLE 

class Books {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}


// A 'get' accessor must return a value.ts(2378)
  get info(){
    return `${this.title} by ${this.author}`
  }

//   A 'set' accessor must have exactly one parameter.ts(1049)

  set checkOut(param1:boolean){
    this.checkOut = param1 ;
  }


  
}

let book1 = new Book( "title" , "author") ;
console.log(book1.author , book1);
