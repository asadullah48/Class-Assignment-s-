"use client";
import Button from "@/components/ui/button";

function Home() {
  
  return (
    <div className="main">
     
      
     
           <button
        // onClick={() => {
        //   console.log("You are signed up!");
        // }}
        className="p-6 bg-slate-400 m-7"
        onMouseEnter={() => console.log("mouse entered")}
        onMouseLeave={() => console.log("Mouse left")}
      >
        sign up
      </button>

      <input
        type="text"
        placeholder="enter some text"
        // onChange={(e) => handleInputChange(e)} 
      />
    </div>
  );
}

export default Home;