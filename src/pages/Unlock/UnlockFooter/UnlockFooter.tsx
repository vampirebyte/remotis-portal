import './UnlockFooter.css';

export const UnlockFooter = (): JSX.Element => {
  return (
    <div className="unlock-footer-content">
      <div className="flex" >

        <div className="login-content__summary" >
          <div className="unlock-footer-content-title">
            <span>Remotis</span>
            <h1>Login</h1>
            <hr></hr>
          </div>
        </div>

        <div className="login-content__description" >
          <div className="unlock-footer-content-text">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed lorem mattis, maximus nulla sit amet, ullamcorper justo.
              Vivamus at augue gravida, porta mauris dapibus, mollis elit. Morbi dapibus enim vitae pharetra viverra. Nunc non nisl nunc.
              Praesent sollicitudin vestibulum blandit. Fusce malesuada.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
