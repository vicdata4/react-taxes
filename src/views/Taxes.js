import React from 'react';
import { useHistory } from "react-router-dom";
import { deleteCookie } from '../utils/functions';
import TaxesTable from '../components/TaxesTable/TaxesTable';
import { getTaxes } from '../store/actions/taxes';
import store from '../store/store';

function Taxes() {
    const history = useHistory();

    function logOut() {
        deleteCookie('XSRF-TOKEN');
        history.push('/');
    }

    store.dispatch(getTaxes());

    return (
        <div>
            <h1>Taxes</h1>
            <button onClick={logOut}>Logout</button>
            <TaxesTable />
        </div>
    );
}

export default Taxes;
