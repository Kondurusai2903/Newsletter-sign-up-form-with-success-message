const ma = document.getElementById("email");
const cardId = document.getElementById("card");
ma.addEventListener("change", (e) => {
  let email = e.target.value;
  function submitfunction(event) {
    event.preventDefault();
    cardId.innerHTML = `
    <div class="back-card">
    <div>
    <img src="./assets/images/icon-success.svg" alt="success-image" class="my-3">
    </div>
    <h1 class="mb-2">Thanks For Subscribing</h1>
    <p>A confirmation email has been sent to
    <b>${email}</b>. Please open it and click the button inside to confirm
    your subscription.</p>
    <button id="dismiss-btn" class="btn p-2 mt-2 w-100">
                  Dismiss Message
                </button>
    </div>
    `;
    const reverse = document.getElementById("dismiss-btn");
    reverse.addEventListener("click", () => {
      cardId.innerHTML = `
      <div class="newcard p-2 border-radius-50">
      <div class="row">
        <div class="col-12 col-sm-6">
          <div class="d-sm-none d-block">
            <img
              src="./assets/images/illustration-sign-up-desktop.svg"
              alt="sign-up image"
              class="main-img"
            />
          </div>
          <div class="d-sm-block d-none p-5">
            <h1 class="py-4">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul class="ps-0">
              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                Product discovery and building what matters
              </li>

              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                Measuring to ensure updates are a success
              </li>
              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                And much more!
              </li>
            </ul>
            <form id="form">
              <div>
                <label for="email">Email address</label><br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autofocus
                  placeholder="you@example.com"
                  class="w-100 p-1 my-2"
                />
              </div>
              <div>
                <button class="btn p-2 mt-2 w-100" type="submit">
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="col-12 col-sm-6 right">
        <div class="d-sm-block d-none">
          <img
            src="./assets/images/illustration-sign-up-desktop.svg"
            alt="sign-up image"
            class="main-img"
          />
          </div>
          <div class="d-sm-none d-block p-5">
            <h1 class="py-4">Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul class="ps-0">
              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                Product discovery and building what matters
              </li>

              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                Measuring to ensure updates are a success
              </li>
              <li class="my-2">
                <img
                  src="./assets/images/icon-success.svg"
                  alt="success-image"
                  width="20px"
                  height="20px"
                />
                And much more!
              </li>
            </ul>
            <form>
              <div>
                <label for="email">Email address</label><br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  autofocus
                  placeholder="you@example.com"
                  class="w-100 p-1 my-2"
                />
              </div>
              <div id="form">
                <button id="b" class="btn p-2 mt-2 w-100" type="submit">
                  Subscribe to monthly newsletter
                </button>
              </div>
            </form>
          </div>
        </div>
        </div>
      </div>
    </div>
      `;
    });
  }
  const formId = document.getElementById("form");
  formId.addEventListener("submit", submitfunction);
});
