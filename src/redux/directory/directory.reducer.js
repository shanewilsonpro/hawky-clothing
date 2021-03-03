const INITIAL_STATE = {
    sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/D54n1LB/hats.jpg",
          id: 1,
          linkUrl: 'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/P5YpKy2/jackets.png",
          id: 2,
          linkUrl: ''
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/q97vScb/sneakers.jpg",
          id: 3,
          linkUrl: ''
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/z64ZyJR/womens.jpg",
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/0mycbsY/mens.jpg",
          size: 'large',
          id: 5,
          linkUrl: ''
        },
      ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;