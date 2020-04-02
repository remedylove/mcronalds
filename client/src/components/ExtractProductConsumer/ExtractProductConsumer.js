import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo';
import { ProductConsumer } from '../../context';
import SingleProductView from '../../components/SingleProductView/SingleProductView';

const extractProductConsumer = neededProps => WrappedComponent =>
  class ProductExtractor extends Component {
      render() {
          return (
                  <ProductConsumer>
                      {value =>   {
                          const props = neededProps.reduce((prevValue, propName) => {
                            return {
                              ...prevValue,
                              [propName]: value[propName]
                            };
                          }, {});

                          return (
                            <WrappedComponent {...props} {...this.props} />
                          );     
                      }}
                  </ProductConsumer>
          )
      }
  }

export default extractProductConsumer;