import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                title: 't-shirts',
                imageUrl: 'https://i.ibb.co/Jq0XFHd/t-shirt.jpg',
                id: 1,
                linkUrl: 'shop/t-shirts'
              },
              {
                title: 'hats',
                imageUrl: 'https://i.ibb.co/3cYHjV2/hats.jpg',
                id: 2,
                linkUrl: 'shop/hats'
              },
              {
                title: 'hoodies',
                imageUrl: 'https://i.ibb.co/JqYbZj6/hoodies.jpg',
                id: 3,
                linkUrl: 'shop/hoodies'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/KGF2fPg/womens.jpg',
                size: 'large',
                id: 4,
                linkUrl: 'shop/womens'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/YXqhZt3/mens.jpg',
                size: 'large',
                id: 5,
                linkUrl: 'shop/mens'
              }
            ]
        }
    }

    render() {
      return (
        <div className='directory-menu'>
          {
            this.state.sections.map(({title, imageUrl, id, size}) => (
              <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            )) 
          }
        </div>

      )
    }
}

export default Directory;