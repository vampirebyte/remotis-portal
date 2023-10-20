import './Success.css';

export const Success = (): JSX.Element => {
  return (
    <div className="success-footer-content">
      <div className="flex" >

        <div className="login-content__summary" >
          <div className="success-footer-content-title">
            <h1>SUCCESS</h1>
            <hr></hr>
          </div>
        </div>

        <div className="login-content__description" >
          <div className="success-footer-content-text">
            <span>
              Your payment was received. Thank you! Your order is being processed and your Licence will reach your xPortal app shortly in "My NFTs" Tab. As soon as you have a Licence you can reserve your first race in the "Racing" tab. 
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
