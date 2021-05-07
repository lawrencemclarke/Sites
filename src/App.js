import './App.css';
import CricketModal from './components/CricketModal';
import {ContentData} from './components/content.data';

const App = () => {
    return (
        <div>
            <CricketModal title={ContentData.title}
                          content={ContentData.content}
                          closeBtnText={ContentData.closeBtnText}
            />
            <CricketModal
                closeBtnText="close"
                content={<div><form className="row g-3 needs-validation" noValidate><div className="col-md-4"><label className="form-label" htmlFor="validationCustom01">First name</label><input className="form-control" defaultValue="Mark" id="validationCustom01" required type="text"/><div className="valid-feedback">Looks good!</div></div><div className="col-md-4"><label className="form-label" htmlFor="validationCustom02">Last name</label><input className="form-control" defaultValue="Otto" id="validationCustom02" required type="text"/><div className="valid-feedback">Looks good!</div></div><div className="col-md-4"><label className="form-label" htmlFor="validationCustomUsername">Username</label><div className="input-group has-validation"><span className="input-group-text" id="inputGroupPrepend">@</span><input aria-describedby="inputGroupPrepend" className="form-control" id="validationCustomUsername" required type="text"/><div className="invalid-feedback">Please choose a username.</div></div></div><div className="col-md-6"><label className="form-label" htmlFor="validationCustom03">City</label><input className="form-control" id="validationCustom03" required type="text"/><div className="invalid-feedback">Please provide a valid city.</div></div><div className="col-md-3"><label className="form-label" htmlFor="validationCustom04">State</label><select className="form-select" id="validationCustom04" required><option defaultValue="" disabled selected>Choose...</option><option>...</option></select><div className="invalid-feedback">Please select a valid state.</div></div><div className="col-md-3"><label className="form-label" htmlFor="validationCustom05">Zip</label><input className="form-control" id="validationCustom05" required type="text"/><div className="invalid-feedback">Please provide a valid zip.</div></div><div className="col-12"><div className="form-check"><input className="form-check-input" defaultValue="" id="invalidCheck" required type="checkbox"/><label className="form-check-label" htmlFor="invalidCheck">Agree to terms and conditions</label><div className="invalid-feedback">You must agree before submitting.</div></div></div><div className="col-12"><button className="btn btn-primary" type="submit">Submit form</button></div></form></div>}
                title="Something else"
            />
        </div>
    );
};

export default App;
