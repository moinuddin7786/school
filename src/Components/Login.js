import React from 'react'

export default function Login() {
    return (
        <div className="container my-5">
            <div className="container">
  <div className="row">
    <div className="col rounded border border-primary p-5 me-3">
    <div className="title p-3 m-3 border rounded border-success bg-success text-dark bg-opacity-50">LOGIN</div>
<form>
  <div className="mb-3 p-3">
    <input type="email" className="form-control" placeholder="User I'd / Phone No / Email I'd" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3 p-3">
    <input type="password" className="form-control" placeholder="Password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success">Login</button>
</form>
    </div>
    <div className="col rounded border border-primary p-5">
     <div className="title p-3 m-3 border rounded border-success bg-success text-dark bg-opacity-50">REGISTER</div>
     <form>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder="Email I'd" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder="Phone No" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder="Password" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder="Re-enter Password" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-success">Register</button>
</form>
    </div>
  </div>
</div>
            
        </div>
    )
}
