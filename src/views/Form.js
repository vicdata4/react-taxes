import React, { useEffect, useCallback } from 'react';
import fetch, { http } from '../utils/fetch.config';
import { useParams } from "react-router-dom";
import { setFormData } from '../store/actions/taxes';
import { Link } from "react-router-dom";
import TaxForm from '../components/TaxForm/TaxForm';
import store from '../store/store';

function Form() {
    let { id } = useParams();

    useEffect(() => {
        store.dispatch(setFormData(id));
    }, []);

    const fetchSubmission = useCallback((data) => {
        fetch(http.post(data), `/submissions`).then(result => {
            if (!result.error) {
                document.querySelector('#tax-form').reset();
                alert('Added submission');
            }
        });
    }, []);


    return (
        <div>
            <div>
                <Link to="/taxes">Back</Link>
            </div>
            <h1>Form</h1>
            <TaxForm parentCallback={fetchSubmission} />
        </div>
    );
}

export default Form;
