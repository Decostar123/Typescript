export let notes = `

1) 

When to Use Each
Arrow Function Type (=>): Use this when defining function types that might be passed around as arguments,
 returned from other functions, or used in a more functional programming style.

Method Signature: Use this when defining an object with methods, making it clear that 
these methods are part of the object's structure.

2) 


Understanding the Problem
You defined setTodo in Props as (param1: string[]) => void, which means setTodo expects a 
function that directly accepts an array of strings (string[]). This would work if you intend
 to update todo directly with an array of strings.

Clarifying Intent and Correction
If your intention is to update todo using a function that receives the previous state and
 returns a new state (functional update), you should define setTodo accordingly. Here’s how you can correct it:

Updated Props Type
tsx
Copy code
type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string[]>>;
};
Explanation:
React.Dispatch and React.SetStateAction: React.Dispatch is a generic type provided by React
 to type the setter function returned by useState. React.SetStateAction<T> is a type that 
 represents the type of the parameter that can be passed to a setter function of type T.


 3) 

 The box-shadow property in CSS is used to add shadow effects around an element's frame.
  The property allows you to create multiple shadow layers by specifying several values for each shadow.

    Here's a breakdown of the box-shadow property you provided:

    css
    Copy code
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    This box-shadow property contains the following values:

    Horizontal Offset (0): This value sets the horizontal distance of the shadow.
     A positive value will position the shadow to the right of the element, and a
      negative value will position it to the left. In this case, 0 means there is no horizontal offset.

    Vertical Offset (0): This value sets the vertical distance of the shadow. 
    A positive value will position the shadow below the element, and a negative value will position it above.
     Here, 0 means there is no vertical offset.

    Blur Radius (10px): This value sets the blur radius. The higher the number, 
    the more blurred the shadow will be. A value of 10px means the shadow will be blurred by 10 pixels.

    Spread Radius (1000px): This value sets the spread radius. A positive value will cause the
     shadow to expand and grow larger, while a negative value will cause it to shrink. In this case, 
     1000px means the shadow will spread out significantly, creating a large shadow area around the element.

    Color (rgba(0, 0, 0, 0.5)): This value sets the color of the shadow. 
    It uses the rgba color format, which stands for red, green, blue, and alpha (opacity).
     In this case, rgba(0, 0, 0, 0.5) represents a semi-transparent black color with 50% opacity.

    Putting it all together, this box-shadow property creates a large, semi-transparent black shadow
     that is blurred and extends significantly beyond the element's frame. The shadow has no horizontal 
     or vertical offset, meaning it surrounds the element evenly.

+ 
the focus and the blur can replace the black div option 

4) the use of the useEffect + inputref in the SingleTodo for the focus is amazing :)  
`