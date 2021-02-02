export default class EkoStoreService {
  data = [
    {
      id: 1,
      title: "Grape-Apple",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 17,
      imageUrl: "./images/grape-apple-small.png",
    },
    {
      id: 2,
      title: "Tomato",
      brand: "Ranok",
      capacity: "1L",
      price: 15,
      imageUrl: "./images/tomat-small.png",
    },
    {
      id: 3,
      title: "Apple",
      brand: "Fresh Pressed",
      capacity: "1L",
      price: 25,
      imageUrl: "./images/straight-apple.jpg",
    },
    {
      id: 4,
      title: "Apricot",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 18,
      imageUrl: "./images/apricot-ukr-juice.jpg",
    },
    {
      id: 5,
      title: "Grape-Apple",
      brand: "Juices of Ukraine",
      capacity: "1L",
      price: 25,
      imageUrl: "./images/grape-apple-small.png",
    },
    {
      id: 6,
      title: "Grape-Apple",
      brand: "Kviten",
      capacity: "1L",
      price: 12,
      imageUrl: "./images/kviten-grape-apple.jpg",
    },
    {
      id: 7,
      title: "Carrot",
      brand: "Fresh Pressed",
      capacity: "1L",
      price: 18,
      imageUrl: "./images/straight-carrot.jpg",
    },
    {
      id: 8,
      title: "Peach",
      brand: "Kviten",
      capacity: "1L",
      price: 11,
      imageUrl: "./images/kviten-peach.jpg",
    },
    {
      id: 9,
      title: "Puree",
      brand: "ECO LLC",
      capacity: "1000 Kilos",
      price: 1999,
      imageUrl: "./images/puree-barrels-slim.jpg",
    },
    {
      id: 10,
      title: "Concen-trate",
      brand: "ECO LLC",
      capacity: "1000 Kilos",
      price: 9999,
      imageUrl: "./images/concentrate-tank-slim.jpg",
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
