import React from "react";
import SHOP_DATA from "./ShopPage.data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        <h1>Collections </h1>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
