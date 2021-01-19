import React from 'react';
import { EkoStoreServiceConsumer } from './../eko-store-service-context';

const withEkoStoreService = () => (Wrapped) => {

  return (props) => {
    return (
      <EkoStoreServiceConsumer>
        {
          (ekoStoreService) => {
            return (<Wrapped {...props}
                     ekoStoreService={ekoStoreService}/>);
          }
        }
      </EkoStoreServiceConsumer>
    );
  }
};

export default withEkoStoreService;
