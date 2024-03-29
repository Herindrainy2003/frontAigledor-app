import React, { useEffect ,useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link ,useParams ,useNavigate} from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/Actions/ProductActions";
import Loading from './../components/LoadingError/Loading';


const SingleProduct = ({history}) => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const productId = useParams();
 
  const id = productId.id
  const dispatch = useDispatch();
 
  const productDetails = useSelector((state) => state.productDetails);
  const {loading , error , product } = productDetails;
  console.log(productDetails)

  useEffect(()=>{
    dispatch(listProductDetails(id));
   
  }, [dispatch, id])

  const AddToCart = (e) => {
    e.preventDefault();
    setQty()
    navigate(`/cart/${id}?qty=${qty}`);
  };
  
  return (
    <>
      <Header />
      <div className="container single-product">
      {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
        <div className="row">
          <div className="col-md-6">
            <div className="single-image">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-dtl">
              <div className="product-info">
                <div className="product-name">{product.name}</div>
              </div>
              <p>{product.description}</p>

              <div className="product-count col-lg-7 ">
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Prix</h6>
                  <span>Ar{product.price}</span>
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span> Valide </span>
                  ) : (
                    <span>Invalide</span>
                  )}
                </div>
                <div className="flex-box d-flex justify-content-between align-items-center">
                  <h6>Stars</h6>
                  {/* <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  /> */}
                </div>
                {product.countInStock > 0 ? (
                  <>
                    <div className="flex-box d-flex justify-content-between align-items-center">
                      <h6>Quantite</h6>
                      <select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                    </div>
                    <button onClick={AddToCart} className="round-black-btn">Ajoutez Au Panier</button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* RATING */}
        {/* <div className="row my-5">
          <div className="col-md-6">
            <h6 className="mb-3">Commentaire</h6>
            <Message variant={"alert-info mt-3"}>Non commentaire</Message>
            <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
              <strong>Admin Doe</strong>
              <Rating />
              <span>Jan 12 2021</span>
              <div className="alert alert-info mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div className="my-4"></div>

            <form>
              <div className="my-4">
                <strong>Noter</strong>
                <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                  <option value="">Select...</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>
              <div className="my-4">
                <strong>commentaire</strong>
                <textarea
                  row="3"
                  className="col-12 bg-light p-3 mt-2 border-0 rounded"
                ></textarea>
              </div>
              <div className="my-3">
                <button className="col-12 bg-black border-0 p-3 rounded text-white">
                  VALIDER
                </button>
              </div>
            </form>
            <div className="my-3">
              <Message variant={"alert-warning"}>
                Desolez {" "}
                <Link to="/login">
                  " <strong>Login</strong> "
                </Link>{" "}
                pour commenter{" "}
              </Message>
            </div>
          </div>
        </div> */}
        </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;

