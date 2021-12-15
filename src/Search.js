import React, {useState} from "react";

export default function Search(){
    const[city, setCity]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        if (city.length > 0){
            alert(city);
        }else{
            alert("Enter a city!");
        }
    }

    function updateCity(event){
     setCity(event.target.value);
    }
    
    return (
        <div className="row">
        <div className="col-9">
              <form className="mb-3" onSubmit={handleSubmit}/>
              <input
                type="search"
                placeHolder="Enter a city..." 
                onChange={updateCity} 
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            </div>
    )
}