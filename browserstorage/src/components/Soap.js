import React from 'react';
import axios from 'axios';

export default function Soap() {
    function soap(){
        let xmls='<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
                            xmlns:web="http://www.webserviceX.NET/">\
            <soapenv:Header/>\
            <soapenv:Body>\
              <web:ConversionRate>\
                <web:FromCurrency>INR</web:FromCurrency>\
                <web:ToCurrency>USD</web:ToCurrency>\
              </web:ConversionRate>\
            </soapenv:Body>\
          </soapenv:Envelope>';

axios.post('http://www.webservicex.com/CurrencyConvertor.asmx?wsdl',
           xmls,
           {headers:
             {'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log("@@",res);
           }).catch(err=>{console.log("##",err)});
    }
      var userLang = navigator.language || navigator.userLanguage; 
        // alert ("The language is: " + userLang);
        console.log("$#$",navigator)

        return (
      <div className='App'>
    <form name="Demo" action="" method="post">
        <div>
            <input type="button" value='soap' onClick={soap} />
        </div>
    </form>
    </div>
  )
}
