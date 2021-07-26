import React from 'react';
import { storiesOf } from "@storybook/react";

import PagaCheckoutButton from '../Paga';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    const getReference = () => {
        let text = "";
        let possible =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
    
        for (let i = 0; i < 15; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    };
      
    return (<PagaCheckoutButton 
                src="https://qa1.mypaga.com/checkout/?w=180&h=40"
                charge_url="https://mymarket/payment/complete"
                public_key="99570634-B88A-472B-9A88-8C1F7E21F045"
                amount="1000.00"
                email="ugo@doroki.com"
                payment_reference={getReference()}
                account_number="41007258779"
                funding_sources="BANK,CARD,PAGA"  />);
})