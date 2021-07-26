# react-paga

This is a react.js library for implementing paga checkout

### Demo

![Alt text](ReactApp.png?raw=true "Demo Image")

### Get Started

This React library provides a wrapper to add Paga Checkout to your React application

### Install
```
npm install react-paga --save 
```

### Usage

```javascript
    import React, { Component } from 'react';

    //import the library
    import PagaCheckoutButton from 'react-paga';
    
    class App extends Component {
    
    	state = {
            src: "https://beta.mypaga.com/checkout/?w=180&h=40", // w=width of button, h=height of button
            charge_url: "https://mymarket/payment/complete", // your store url for payment verification
    		    key: "######################################", // PAGA PUBLIC KEY
    		    email: "john.doe@xyz.com",  // customer email
    		    amount: 10000,
            account_number: "41007258779", // account number identifying customer on the merchant's system.
            funding_sources: "BANK,CARD,PAGA" // Available options are CARD, BANK and PAGA.
    	}
    
    	getReference = () => {
    		// you can use your own unique reference implementation here
    		let text = "";
    		let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";
    
    		for( let i=0; i < 15; i++ )
    			text += possible.charAt(Math.floor(Math.random() * possible.length));
    
    		return text;
    	}
    
      render() {
        return (
          <div> 
              <PagaCheckoutButton
                src={this.state.src}
                charge_url={this.state.charge_url}
                public_key={this.state.key}
                amount={this.state.amount}
                email={this.state.email}
                payment_reference={getReference()}
                account_number={this.state.account_number}
                funding_sources={this.state.funding_sources}
              />
          </div>
        );
      }
    }
    
    export default App;
```

Please checkout [Paga Documentation](https://developer-docs.paga.com/docs/paga-checkout) for other available options you can add to the tag.

## Deployment
REMEMBER TO CHANGE THE KEY WHEN DEPLOYING ON A LIVE/PRODUCTION SYSTEM

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feat/feature-name`
3. Commit your changes: `npm run commit` follow the commit message 
4. Push to the branch: `git push`
5. Submit a pull request 😉😉

## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Don't forget to [follow me on twitter](https://twitter.com/_impact_dev)!

Thanks!
Henry Ugochukwu.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
