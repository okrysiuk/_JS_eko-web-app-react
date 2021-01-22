export default class EkoStoreService {
  data = [
    {
      id: 1,
      title: "Grape-Apple",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 25,
      imageUrl: "./grape-apple-small.png",
    },
    {
      id: 2,
      title: "Tomato",
      brand: "Ranok",
      capacity: "1L",
      price: 30,
      imageUrl: "./tomat-small.png",
    },
    {
      id: 3,
      title: "Grape-Apple",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 25,
      imageUrl: "./grape-apple-small.png",
    },
    {
      id: 4,
      title: "Tomato",
      brand: "Ranok",
      capacity: "1L",
      price: 30,
      imageUrl: "./tomat-small.png",
    },
    {
      id: 5,
      title: "Grape-Apple",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 25,
      imageUrl: "./grape-apple-small.png",
    },
    {
      id: 6,
      title: "Tomato",
      brand: "Ranok",
      capacity: "1L",
      price: 30,
      imageUrl: "./tomat-small.png",
    },
  ];

  //! ----Backend server delay emulator-------
  /*
  getCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("Something bad happened"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
  */
  //! ----------------------------------------

  getCards() {
    return new Promise((resolve, reject) => {
      if (this.data) {
        resolve(this.data);
      } else {
        reject(new Error("Oops! I did it again.."));
      }
    });
  }
}
