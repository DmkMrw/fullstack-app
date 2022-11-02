const initialState = {
  products: [
    {
      id: 1,
      type: 'Gun',
      name: 'Glock 17',
      price: '600',
      brandNew: true,
      outOfStock: false,
      image: './images/products/glock17.jpg',
      starsRating: 4,
      description: ""
    },
    {
      id: 2,
      type: 'Gun',
      name: 'Glock 19X',
      price: '650',
      brandNew: true,
      outOfStock: false,
      image: './images/products/glock 19x.jpg',
      starsRating: 4,
      description: ""
    },
    {
      id: 3,
      type: 'Gun',
      name: 'Canik P120',
      price: '499',
      brandNew: false,
      outOfStock: false,
      image: './images/products/canik_p120.jpg',
      description: ""
    },
    {
      id: 4,
      type: 'Gun',
      name: 'CZ P10 F',
      price: '400',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_p10f.png',
      description: ""
    },
    {
      id: 5,
      type: 'Rifle',
      name: 'Aero Precison',
      price: '999',
      brandNew: true,
      outOfStock: false,
      image: './images/products/aero_precison.png',
      description: ""
    },
    {
      id: 6,
      type: 'Rifle',
      name: 'Diamondback DB15',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/diamondback_db15.jpg',
      description: ""
    },
    {
      id: 7,
      type: 'Rifle',
      name: 'Grot',
      price: '1199',
      brandNew: false,
      outOfStock: false,
      image: './images/products/grot.png',
      description: ""
    },
        {
      id: 8,
      type: 'Rifle',
      name: 'CZ Bren 2',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_bren_2.png',
      description: ""
    },
        {
      id: 9,
      type: 'Rifle',
      name: 'Daniel Defense MK18',
      price: '1399',
      brandNew: false,
      outOfStock: false,
      image: './images/products/daniel_defense_mk18.png',
      description: ""
    },
        {
      id: 10,
      type: 'Gun',
      name: 'CZ Shadow 2',
      price: '1099',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_shadow_2.jpg',
      description: ""
    },
        {
      id: 11,
      type: 'gun',
      name: 'CZ P10 S',
      price: '899',
      brandNew: false,
      outOfStock: false,
      image: './images/products/cz_p10_s.jpg',
      description: ""
    },
    {
      id: 12,
      type: 'Rifle',
      name: 'Pac DMR',
      price: '1299',
      brandNew: true,
      outOfStock: false,
      image: './images/products/pac_dmr.jpg',
      description: ""
    }
  ],
  user: null,
};

export default initialState;