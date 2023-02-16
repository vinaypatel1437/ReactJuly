import React, { Component } from "react";

export default class Sample extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
            id: 1,
          image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          name: "Mobile",
          description: "It is a mobile",
        },
        {
            id: 2,
          image:
            "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80",
          name: "Laptop",
          description: "It is a Laptop",
        },
        {
            id: 3,
          image: "https://thumbs.dreamstime.com/b/bottle-water-12522351.jpg",
          name: "Bottle",
          description: "It is a Bottle",
        },
        {
            id:4,
          image:
            "https://images.unsplash.com/photo-1586661615438-349a276d098b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9ja3xlbnwwfHwwfHw%3D&w=1000&q=80",
          name: "Lock",
          description: "It is a Lock",
        },
        {
            id: 5,
          image:
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
          name: "Mobile",
          description: "It is a mobile",
        },
      ],
    };
  }
  render() {
    return (
      <div className="multiPro">
        {this.state.products.map((value, index) => {
          return (
            <div className="singlePro" key={value.id}>
              <img src={value.image} />
              <h3>{value.name}</h3>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
