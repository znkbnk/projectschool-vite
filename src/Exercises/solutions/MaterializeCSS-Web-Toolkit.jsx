const solutionCode1 = `
//Dashboard.js

import React, { useEffect } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import './styles.css'

const Dashboard = () => {
  useEffect(() => {
    const collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles, {
      accordion: false,
      inDuration: 230,
      outDuration: 350,
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className='nav-extended'>
        <div className='nav-wrapper grey '>
          <img
            style={{ margin: "10px 10px 0" }}
            width='50'
            height='50'
            src='https://previews.dropbox.com/p/thumb/ACTj7BPblLSWsYHfWcljDpPDaQdFugrV87MtFfpK-V1MtDxpZUFy3NitF9Ts83PdjFEv1vZRe8dQQ05eYheyghYbxcq7I7ZAz48ZRuFJIKmiW1QpjxvtViC1ZJZadu4r3bVCZbUhIGa50ndDmQ1AAp176F74w_Mc9mOSBZ42UENyGRzdi3_PXmAdxNeLjlUmYN2Pn2cMhcKFRh8S0sezuaxJ485zi2cW82UUKFveFyYoNi4FbEJE82pohODqi_SGRENynPZP67GjGT1iml8khafzy5bsUBlKMHccHIaVwbaWDcdi0G0kQikL603JJ1Kmi_sgohIed72HBG0ezAzp23rn/p.png'
            className='square responsive-img'
            alt='Profile'
          />

          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='1111111.html'>1111111</a>
            </li>
            <li>
              <a href='2222222.html'>2222222</a>
            </li>
            <li>
              <a href='3333333.html'>3333333</a>
            </li>
          </ul>
        </div>
        <div className='nav-content grey '>
          <ul className='tabs tabs-transparent'>
            <li className='tab'>
              <a href='#test1'>Test 1</a>
            </li>
            <li className='tab'>
              <a className='active' href='#test2'>
                Test 2
              </a>
            </li>
            <li className='tab disabled'>
              <a href='#test3'>Disabled Tab</a>
            </li>
            <li className='tab '>
              <a href='#test4'>Test 4</a>
            </li><li className='tab '>
              <a href='#test5'>Test 5</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Dashboard Sidebar */}
      <div className='row'>
        <div className='col s2 no-padding'>
          <div className='dashboard-left'>
            <ul className='collapsible' data-collapsible='accordion'>
              <li id='dash_users_header'>
                <h3>Dashboard</h3>
              </li>
              <li id='dash_users'>
                <div
                  id='dash_users_header'
                  className='collapsible-header waves-effect'
                >
                  <b>Users</b>
                </div>
                <div id='dash_users_body' className='collapsible-body'>
                  <ul>
                    <li id='users_seller'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Seller
                      </a>
                    </li>

                    <li id='users_customer'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Customer
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li id='dash_products'>
                <div
                  id='dash_products_header'
                  className='collapsible-header waves-effect'
                >
                  <b>Products</b>
                </div>
                <div id='dash_products_body' className='collapsible-body'>
                  <ul>
                    <li id='products_product'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='/'
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='/'
                      >
                        Orders
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li id='dash_categories'>
                <div
                  id='dash_categories_header'
                  className='collapsible-header waves-effect'
                >
                  <b>Categories</b>
                </div>
                <div id='dash_categories_body' className='collapsible-body'>
                  <ul>
                    <li id='categories_category'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Category
                      </a>
                    </li>

                    <li id='categories_sub_category'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Sub Category
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li id='dash_brands'>
                <div
                  id='dash_brands_header'
                  className='collapsible-header waves-effect'
                >
                  <b>Brands</b>
                </div>
                <div id='dash_brands_body' className='collapsible-body'>
                  <ul>
                    <li id='brands_brand'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Brand
                      </a>
                    </li>

                    <li id='brands_sub_brand'>
                      <a
                        className='waves-effect'
                        style={{ textDecoration: "none" }}
                        href='#!'
                      >
                        Sub Brand
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className='col s10'>
          <div className='main-content'>
            <div>
              <main>
                <div id='test1' className='row'>
                  <div className='col s6'>
                    <div
                      style={{ padding: "35px" }}
                      align='center'
                      className='card'
                    >
                      <div className='row'>
                        <div className='left card-title'>
                          <b>Users</b>
                        </div>
                      </div>

                      <div className='row'>
                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              person
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Seller</h5>
                            </span>
                          </div>
                        </a>
                        <div className='col s1'>&nbsp;</div>
                        <div className='col s1'>&nbsp;</div>

                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              people
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Customer</h5>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='col s6'>
                    <div
                      style={{ padding: "35px" }}
                      align='center'
                      className='card'
                    >
                      <div className='row'>
                        <div className='left card-title'>
                          <b>Products</b>
                        </div>
                      </div>
                      <div className='row'>
                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              store
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Product</h5>
                            </span>
                          </div>
                        </a>

                        <div className='col s1'>&nbsp;</div>
                        <div className='col s1'>&nbsp;</div>

                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              assignment
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Orders</h5>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col s6'>
                    <div
                      style={{ padding: "35px" }}
                      align='center'
                      className='card'
                    >
                      <div className='row'>
                        <div className='left card-title'>
                          <b>Brands</b>
                        </div>
                      </div>

                      <div className='row'>
                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              local_offer
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Brand</h5>
                            </span>
                          </div>
                        </a>

                        <div className='col s1'>&nbsp;</div>
                        <div className='col s1'>&nbsp;</div>

                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              loyalty
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Sub Brand</h5>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className='col s6'>
                    <div
                      style={{ padding: "35px" }}
                      align='center'
                      className='card'
                    >
                      <div className='row'>
                        <div className='left card-title'>
                          <b>Categories</b>
                        </div>
                      </div>
                      <div className='row'>
                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              view_list
                          </i>
                            <span className='grey-text text-lighten-1'>
                              <h5>Category</h5>
                            </span>
                          </div>
                        </a>
                        <div className='col s1'>&nbsp;</div>
                        <div className='col s1'>&nbsp;</div>

                        <a href='/!'>
                          <div
                            style={{ padding: "30px" }}
                            className='grey lighten-3 col s5 waves-effect'
                          >
                            <i className='grey-text text-lighten-1 large material-icons'>
                              view_list
                          </i>
                            <span className='truncate grey-text text-lighten-1'>
                              <h5>Sub Category</h5>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <div className='navigator '>
                <div className='top-cards'>
                  <div id='test2' className='row'>
                    <div className='col s12 m5'>
                      <div className='card-panel grey'>
                        <span className='white-text '>
                          I am a very simple card. I am good at containing small
                          bits of information. I am convenient because I require
                          little markup to use effectively. I am similar to what
                          is called a panel in other frameworks.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id='test3' className='row'>
                    <div className='col s12 m5'>
                      <div className='card-panel grey'>
                        <span className='white-text'>
                          I am a very simple card. I am good at containing small
                          bits of information. I am convenient because I require
                          little markup to use effectively. I am similar to what
                          is called a panel in other frameworks.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id='test4' className='row'>
                    <div className='col s12 m5'>
                      <div className='card-panel grey'>
                        <span className='white-text'>
                          I am a very simple card. I am good at containing small
                          bits of information. I am convenient because I require
                          little markup to use effectively. I am similar to what
                          is called a panel in other frameworks.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id='test5' className='row'>
                    <div className='col s12 m7'>
                      <div className='card'>
                        <div className='card-image'>
                          <img src='images/sample-1.jpg' alt='a' />
                          <span className='card-title'>Card Title</span>
                        </div>
                        <div className='card-content'>
                          <p>
                            I am a very simple card. I am good at containing
                            small bits of information. I am convenient because I
                            require little markup to use effectively.
                          </p>
                        </div>
                        <div className='card-action'>
                          <a href='/' >This is a link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Part */}

          </div>
        </div>
      </div>

      {/* footer */}
      <div >
        <footer className='page-footer grey'>
          <div className='container'>
            <div className='row'>
              <div className='col l6 s12'>
                <h5 className='white-text'>Footer Content</h5>
                <p className='grey-text text-lighten-4'>
                  You can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className='col l4 offset-l2 s12'>
                <h5 className='white-text'>Links</h5>
                <ul>
                  <li>
                    <a className='grey-text text-lighten-3' href='#!'>
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className='grey-text text-lighten-3' href='#!'>
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className='grey-text text-lighten-3' href='#!'>
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className='grey-text text-lighten-3' href='#!'>
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer-copyright'>
            <div className='container'>
              © 2014 Copyright Text
              <a className='grey-text text-lighten-4 right' href='#!'>
                More Links
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;