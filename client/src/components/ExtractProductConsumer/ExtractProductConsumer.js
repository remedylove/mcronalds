import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import Loader from '../../components/Loader/Loader';

const extractProductConsumer = neededProps => WrappedComponent =>

  class ProductExtractor extends Component {

      render() {
          return (
                  <ProductConsumer>

                      {value =>   {
                          const { isReady } = value;
                          const props = neededProps.reduce((prevValue, propName) => {
                            return {
                              ...prevValue,
                              [propName]: value[propName]
                            };
                          }, {});

                          return (
                            isReady
                            ? <WrappedComponent {...props} {...this.props} />
                            : <Loader />
                          );     
                      }}
                  </ProductConsumer>
          )
      }
  }

export default extractProductConsumer;