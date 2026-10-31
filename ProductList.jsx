import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedNodes, setAddedNodes] = useState({});
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
        { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde and xylene.", cost: "$12" },
        { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
        { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity inside.", cost: "$14" },
        { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Cleans indoor air toxins.", cost: "$20" },
        { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/09/18/aloe-vera-3283344_1280.jpg", description: "Purifies air and heals skin.", cost: "$10" },
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/13/16/10/lavender-2500858_1280.jpg", description: "Calming scent for stress.", cost: "$20" },
        { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2018/05/27/17/45/jasmine-3434076_1280.jpg", description: "Sweet floral fragrance.", cost: "$18" },
        { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Pine-like aroma for cooking.", cost: "$15" },
        { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/26/17/57/mint-1162994_1280.jpg", description: "Refreshing herbal scent.", cost: "$10" },
        { name: "Eucalyptus", image: "https://cdn.pixabay.com/photo/2016/03/28/12/35/eucalyptus-1285516_1280.jpg", description: "Fresh invigorating scent.", cost: "$22" },
        { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2017/05/23/16/23/lemon-balm-2337728_1280.jpg", description: "Citrusy relaxing aroma.", cost: "$14" },
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2020/05/19/12/35/zz-plant-5190623_1280.jpg", description: "Thrives in low light.", cost: "$25" },
        { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816941_1280.jpg", description: "Extremely easy to grow.", cost: "$12" },
        { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2021/01/18/17/46/houseplant-5928818_1280.jpg", description: "Hardy and durable.", cost: "$20" },
        { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/succulent-1846153_1280.jpg", description: "Succulent requiring little water.", cost: "$15" },
        { name: "Succulent Mix", image: "https://cdn.pixabay.com/photo/2016/11/29/04/17/bonfire-1867274_1280.jpg", description: "Minimal watering required.", cost: "$10" },
        { name: "Chinese Evergreen", image: "https://cdn.pixabay.com/photo/2020/07/22/09/25/aglaonema-5428549_1280.jpg", description: "Tolerates low indoor light.", cost: "$18" },
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedNodes(prevState => ({ ...prevState, [plant.name]: true }));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setShowCart(false)}>
          <h3>Paradise Nursery</h3>
        </div>
        <div className="nav-links">
          <a href="#" onClick={() => setShowCart(false)}>Plants</a>
          <a href="#" onClick={() => setShowCart(true)}>
            Cart 🛒 <span className="cart-count">{totalCartCount}</span>
          </a>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-grid">
          {plantsArray.map((categoryObj, index) => (
            <div key={index} className="category-section">
              <h2>{categoryObj.category}</h2>
              <div className="plant-cards">
                {categoryObj.plants.map((plant, pIndex) => (
                  <div key={pIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="cost">{plant.cost}</p>
                    <button
                      className="add-to-cart-btn"
                      disabled={addedNodes[plant.name] || cartItems.some(item => item.name === plant.name)}
                      onClick={() => handleAddToCart(plant)}
                    >
                      {addedNodes[plant.name] || cartItems.some(item => item.name === plant.name) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
