import React from "react";

import MenuItem from "../menu-item/menu-item.component.jsx";

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/D54n1LB/hats.jpg",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/P5YpKy2/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/q97vScb/sneakers.jpg",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/z64ZyJR/womens.jpg",
          size: 'large',
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/0mycbsY/mens.jpg",
          size: 'large',
          id: 5,
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
