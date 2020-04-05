import React, { useState } from "react";
import visa from "./visa.png";

function App() {
  const [state, setState] = useState({
    FullName: "",
    CardNumber: "",
    CCV: "",
    MM: "",
    YY: "",
  });

  const [focus, setFocus] = useState(false);

  const handleChange = (input) => (e) => {
    setState({ ...state, [input]: e.target.value });
  };

  // gia na alazo to onoma sti karta oso grafo exo valei if statement mesa sto html den boro na kano update 2 states taftoxrona vasi to value tou alou state gia afto ekan kai afto ti lisi

  const onFocus = () => {
    setFocus(true);
  };

  // to onBlur einai to focusout
  const onBlur = () => {
    setFocus(false);
  };

  // exo valei inline css g sto div me to id card gia na kano retate tin karta otan kano  focus sto CCV input box

  return (
    <div className="container">
      <div className="card">
        <div
          className="flip"
          id="card"
          style={{
            " webkit  transform": focus ? "rotateY(180deg)" : "rotateY(0deg)",
            transform: focus ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div className="front">
            <div className="strip-bottom"></div>
            <div className="strip-top"></div>
            <img className="logo" src={visa} />
            <div className="investor">Investor</div>
            <div className="chip">
              <div className="chip-line"></div>
              <div className="chip-line"></div>
              <div className="chip-line"></div>
              <div className="chip-line"></div>
              <div className="chip-main"></div>
            </div>
            <svg
              className="wave"
              viewBox="0 3.71 26.959 38.787"
              width="26.959"
              height="38.787"
              fill="white"
            >
              <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
              <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
              <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
            </svg>
            {state.CardNumber.length > 0 ? (
              <div className="card-number">
                <div className="section">
                  {state.CardNumber.substring(0, 4)}
                </div>
                <div className="section">
                  {state.CardNumber.substring(4, 8)}
                </div>
                <div className="section">
                  {state.CardNumber.substring(8, 12)}
                </div>
                <div className="section">
                  {state.CardNumber.substring(12, 16)}
                </div>
              </div>
            ) : (
              <div className="card-number">
                <div className="section">5453</div>
                <div className="section">2000</div>
                <div className="section">0000</div>
                <div className="section">0000</div>
              </div>
            )}
            {/* <div className="card-number">
              <div className="section">5453</div>
              <div className="section">2000</div>
              <div className="section">0000</div>
              <div className="section">0000</div>
            </div> */}
            <div className="end">
              <span className="end-text">exp. end:</span>
              {state.MM.length > 0 ? (
                <span className="end-date">
                  {state.MM}/{state.YY}
                </span>
              ) : (
                <span className="end-date">11/22</span>
              )}
              {/* <span className="end-date">11/22</span> */}
            </div>
            {state.FullName.length > 0 ? (
              <div className="card-holder">{state.FullName}</div>
            ) : (
              <div className="card-holder">John Doe</div>
            )}
            {/* <div className="card-holder">Filip Vitas</div> */}
          </div>
          <div className="back">
            <div className="strip-black"></div>
            <div className="ccv">
              <label>ccv</label>
              {/* <div>123</div> */}
              {state.CCV.length > 0 ? <div>{state.CCV}</div> : <div>123</div>}
            </div>
            <div className="terms">
              <p>
                This card is property of Monzo Bank, Wonderland. Misuse is
                criminal offence. If found, please return to Monzo Bank or to
                the nearest bank with MasterCard logo.
              </p>
              <p>Use of this card is subject to the credit card agreement.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="input-container-label">
          <input
            type="text"
            id="fname"
            name="fname"
            required
            onChange={handleChange("FullName")}
            maxLength="20"
          />

          {/* xriazome to requeried gia na doulevei to input:valid */}

          <label htmlFor="fname">Name on Card</label>

          <span className="highlight"></span>
        </div>
        <div className="input-container-label">
          <input
            type="text"
            id="fname"
            name="fname"
            id="test_1"
            required
            onChange={handleChange("CardNumber")}
            maxLength="16"
          />

          {/* xriazome to requeried gia na doulevei to input:valid */}

          <label htmlFor="fname">Card Name</label>

          <span className="highlight"></span>
        </div>
        <div className="input-container-label">
          <input
            type="text"
            name="fname"
            id="CCV"
            required
            onChange={handleChange("CCV")}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength="3"
          />

          {/* xriazome to requeried gia na doulevei to input:valid  */}

          <label htmlFor="fname">CCV</label>

          <span className="highlight"></span>
        </div>

        <div className="expiration">
          <div className="expriation_div">Exp Date:</div>

          <div className="input-container-label expiration_container">
            <input
              type="text"
              name="fname"
              id="CCV"
              required
              onChange={handleChange("MM")}
              maxLength="2"
            />

            {/* xriazome to requeried gia na doulevei to input:valid  */}

            <label htmlFor="fname">MM</label>

            <span className="highlight"></span>
          </div>

          <div className="input-container-label expiration_container">
            <input
              type="text"
              name="fname"
              id="MM"
              required
              onChange={handleChange("YY")}
              maxLength="2"
            />

            {/* xriazome to requeried gia na doulevei to input:valid  */}

            <label htmlFor="fname">YY</label>

            <span className="highlight"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
