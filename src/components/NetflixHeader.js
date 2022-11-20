import React from 'react';
import "./NetfliixHeader.css";


export default function NetflixHeader() {
  const languages = [
    {
      title : "Select Laguage",
    }, 
    {
      title : "Telugu",
    }, 
    {
      title : "Hindi",
    },
    {
      title : "Tamil",
    },
    {
      title : "English",
    },
    {
      title : "Kannada",
    },
    {
      title : "Malayalam"
    }
  ];

  return (
    <>
    <div className='d-flex justify-content-between m-3 p-3'>
        <div>
            <h1 className='text-danger'>NETFLIX</h1>
        </div>
        <div className='input-group w-25'>
        <select className="form-select">
                    {
                      languages.map(language => 
                        <option>{language.title}</option>
                        )
                    }
        </select>
        <button className="btn btn-danger ms-2">Signin</button>

        </div>
    </div>
    
    </>
  )
}
