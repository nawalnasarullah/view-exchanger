
import { useState } from 'react';


const PaymentPage = () => {
    const [price, setPrice] = useState('79.00');
    const [subtotal, setTotal] = useState('79.00');
    const [packageName, setPackageName] = useState('YouTube View & Like Exchange (5 Videos)');
    const [Pkginformation, setPkginformation] = useState('This subscription is designed for anyone that posts on YouTube and wants their videos to be viewed and liked more often, billed monthly.');
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [promoCode, setPromoCode] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cvcNo, setCVCNo] = useState('');
    const [country, setCountry] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [validPhone, setValidPhone] = useState(true);
    const [validCardNo, setValidCardNo] = useState(true);
    const [validCardDate, setValidCardDate] = useState(true);
    const [validCVCNo, setValidCVCNo] = useState(true);
  
    const toggleCodeInput = () => {
      setShowCodeInput(!showCodeInput);
      if (!showCodeInput) {
        setPromoCode('');
      }
    };
  
    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
  
    const validatePhoneNumber = (phone) => {
      const pattern = /^[0-9]{10,14}$/; // Adjust according to your requirements
      return pattern.test(phone);
    };
  
    const validateCardNo = (card) => {
      const pattern = /^[0-9]{16}$/;
      return pattern.test(card);
    };
  
    const validateCardDate = (date) => {
      const pattern = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
      if (!pattern.test(date)) return false;
      const [month, year] = date.split('/').map(Number);
      const expiryDate = new Date(`20${year}`, month - 1);
      return expiryDate > new Date();
    };
  
    const validateCVCNo = (cvc) => {
      const pattern = /^[0-9]{3,4}$/;
      return pattern.test(cvc);
    };
    const handleCodeChange = (e) => { setPromoCode(e.target.value); }
  
    const handleEmailChange = (e) => {
      const input = e.target.value;
      setEmail(input);
      setValidEmail(validateEmail(input));
    };
  
    const handlePhoneChange = (e) => {
      const input = e.target.value;
      setPhoneNumber(input);
      setValidPhone(validatePhoneNumber(input));
    };
  
    const handleCardNoChange = (e) => {
      const input = e.target.value;
      setCardNo(input);
      setValidCardNo(validateCardNo(input));
    };
  
    const handleCardDateChange = (e) => {
      const input = e.target.value;
      setCardDate(input);
      setValidCardDate(validateCardDate(input));
    };
  
    const handleCVCNoChange = (e) => {
      const input = e.target.value;
      setCVCNo(input);
      setValidCVCNo(validateCVCNo(input));
    };
  
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
  
    return (
      <div className="App">
        <div className='container'>
        <div className="row d-flex justify-content-center align-items-start  gap-5 mt-5" style={{ height: 'auto' }}>
          <div className="col-5 p-4">
            <div className="p-3 h-100 w-auto">
              <div className="head text-start">
                <p><strong>Influence Booster</strong></p>
                <p className="mt-4 fs-5 text-muted"><strong>Subscribe to YouTube View & Like Exchange (5 Videos)</strong></p>
              </div>
              <div className="prices  d-flex justify-content text-start">
                <h3 className="text-start fs-1 p-1">US{price}</h3>
                <p className="ml-3">per <br />month</p>
              </div>
              <div className="Info-Package text-start mt-4 text-muted">
                <div className="d-flex justify-content-between">
                  <h6>{packageName}</h6>
                  <p><strong>US{price}</strong></p>
                </div>
                <p>{Pkginformation}</p>
              </div>
              <div className="Subtotal text-start d-flex justify-content-between">
                <div><p><strong>Subtotal</strong></p></div>
                <div><p><strong>US{subtotal}</strong></p></div>
              </div>
              <p className="text-start text-primary-emphasis" onClick={toggleCodeInput} style={{ cursor: 'pointer', color: "blue" }}>Add Promotion Code</p>
              {showCodeInput && (
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter promotion code"
                    value={promoCode}
                    onChange={handleCodeChange}
                  />
                </div>
              )}
              <div className="Total text-start d-flex justify-content-between">
                <p><strong>Total due today</strong></p>
                <p><strong>US{price}</strong></p>
              </div>
            </div>
          </div>
          <div className="col-6 d-grid gap-3">
            <div>
              <button className="btn btn-success col-12 mx-auto mt-4 gap" type="button">Pay with Link</button>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <span className="mx-2">-----------------</span>
              <span className="mx-2 text-secondary">or pay with card</span>
              <span className="mx-2">-----------------</span>
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="contact-information" className="form-label">Contact Information</label>
              <input className="form-control mb-2" value={email} type="text" placeholder="email@example.com" onChange={handleEmailChange} />
              {!validEmail && <div className="text-danger">Please enter a valid email</div>}
              <input className="form-control" value={phoneNumber} type="text" placeholder="03025173954" onChange={handlePhoneChange} />
              {!validPhone && <div className="text-danger">Please enter a valid phone number</div>}
            </div>
            <div className='mb-3 text-start'>
              <label htmlFor="Card-Information" className='form-label'>Card Information</label>
              <input className='form-control mb-2' value={cardNo} type='text' placeholder='1234 1234 1234 1234' onChange={handleCardNoChange}></input>
              {!validCardNo && <div className="text-danger">Please enter a valid card number</div>}
              <div className='d-flex'>
                <input className='form-control' value={cardDate} type='text' placeholder='MM / YY' onChange={handleCardDateChange}></input>
                <input className='form-control' value={cvcNo} type='text' placeholder='CVC' onChange={handleCVCNoChange}></input>
              </div>
              <div className='d-flex'>
                {!validCardDate && <div className="text-danger">Please enter a valid expiration date</div>}
                {!validCVCNo && <div className="text-danger">Please enter a valid CVC number</div>}
              </div>
            </div>
            <div className='mt-3 text-start'>
              <label htmlFor="Country or region" className='form-label'>Country or Region</label>
              <select className='form-control' value={country} onChange={handleCountryChange}>
                <option>Pakistan</option>
                <option>India</option>
                <option>Afghanistan</option>
                <option>United States</option>
                <option>Canada</option>
              </select>
              <div className='form-check mt-3'>
                <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" />
                <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                  <strong>Securely save my information for 1-click checkout</strong><br />
                  Pay faster on Influence Booster and everywhere Link is accepted
                </label>
              </div>
              <div>
                <button className="btn btn-primary col-12 mx-auto mt-4 gap" type="button">Subscribe</button>
                <div className='mt-3 text-left'><p className='fs-50'>By confirming your subscription, you allow Influence Booster to charge you for future payments in accordance with their terms. You can always cancel your subscription.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}
 
export default PaymentPage;