import React, { Component } from "react";

export default class PetLove extends Component {
  state = {
    dogs: [
      { name: "Tulio", breed: "Chiwawa", age: "5 years" },
      { name: "Pipoca", breed: "SRD", age: "9 years" },
      { name: "Spike", breed: "Pastor", age: "2 years" }
    ],
    cats: [
      { name: "Oliver", breed: "angorá", age: "10 years" },
      { name: "Lola", breed: "persa", age: "12 years" },
      { name: "Garfield", breed: "malandro", age: "7 years" }
    ],
    namelist: [],
    breedlist:[],
    agelist:[]
  };
//NOMES DOS PETS
  dogListname = () => {
    this.setState({
      namelist: this.state.dogs.map((item) => (
        <div>
          <h2>DOG'S NAME : {item.name}</h2>
        </div>
      ))
    });
  };

  catListname = () => {
    this.setState({
namelist: this.state.cats.map((item) => (
        <div>
          <h2>CAT'S NAME : {item.name}</h2>
        </div>
      ))
    });
  };

//RAÇA DOS PETS

dogListbreeds = () => {
  this.setState({
    breedlist: this.state.dogs.map((item) => (
      <div>
        <h2>DOG'S BREED : {item.breed}</h2>
      </div>
    ))
  });
};

catListbreeds = () => {
  this.setState({
    breedlist: this.state.cats.map((item) => (
      <div>
        <h2>CAT'S BREEDS : {item.breed}</h2>
      </div>
    ))
  });
};


//IDADE DOS PETS

dogListages = () => {
  this.setState({
    agelist: this.state.dogs.map((item) => (
      <div>
        <h2>DOG'S NAME : {item.age}</h2>
      </div>
    ))
  });
};

catListages = () => {
  this.setState({
    agelist: this.state.cats.map((item) => (
      <div>
        <h2>CAT'S NAME : {item.age}</h2>
      </div>
    ))
  });
};


  render() {
    return (
      <div>
      <div>
        <h1>Pet's names</h1>
        <button onClick={this.dogListname}>DOGS</button>
        <button onClick={this.catListname}>CATS</button>
        <p>{this.state.namelist}</p>
      </div>
       <div>
       <h1>Pet's Ages</h1>
       <button onClick={this.dogListages}>DOGS</button>
       <button onClick={this.catListages}>CATS</button>
       <p>{this.state.agelist}</p>
     </div>
      <div>
      <h1>Pet's breeds</h1>
      <button onClick={this.dogListbreeds}>DOGS</button>
      <button onClick={this.catListbreeds}>CATS</button>
      <p>{this.state.breedlist}</p>
    </div>
    </div>
    );
  }
}
