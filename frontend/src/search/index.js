import "./search.css";
import {Link} from 'react-router-dom';


function Search(props) {
    
  return (
    <div>
      <div className="products-wrapper">
        <div className="products wrapper">
          <div className="products-title">
            <div className="product-name">
              <p>
                Sản phẩm /
                <b>
                  {' Kết quả tìm kiếm cho "' + props.keyWord + '"'}
                </b>
              </p>
            </div>
          </div>
          <div className="products-list">
            <div className="iphoneBP-list">
              {(props.productsSearch.length) ? props.productsSearch.map((product, index) => (
                <Link
                  key={index}
                  className="selling-item"
                  style={{ margin: 10 }}
                  to={"/products/" + product.type + "/" + product.id}
                >
                  <div className="style-item">
                    <div className="slider-image">
                      <img src={product.image[0]} alt="" />
                    </div>
                    <div className="slider-title">
                      <p>{product.title}</p>
                    </div>
                    <div className="slider-price">
                      {product.price !== "" && (
                        <span className="real-price price-none">
                          {product.price + "đ"}
                        </span>
                      )}
                      <span className="saleOffPrice">
                        {product.saleOffPrice}đ
                      </span>
                    </div>
                  </div>
                </Link>
              )) : <div className="search-error">Không có kết quả phù hợp!</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
