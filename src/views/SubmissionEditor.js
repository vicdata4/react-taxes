import React from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TaxForm from '../components/TaxForm/TaxForm';
import fetch, { http } from '../utils/fetch.config';

function SubmissionEditor({ data }) {
    let { id } = useParams();

    async function editSubmission(data_) {
        data_.id = data.id;
        const response = await fetch(http.put(data_), `/submissions/${data.id}`);

        if(!response.error) {
            alert('Updated');
        }
    }

    return (
        <div>
            <div>
                <Link to={`/taxes/${id}/submissions`}>Back</Link>
            </div>
            <h1>Editor</h1>
            <TaxForm data={data} parentCallback={editSubmission} />
        </div>
    );
}
const mapStateToProps = function (state) {
    return {
        data: state.taxes.selectedSubmission
    }
}

export default connect(mapStateToProps)(SubmissionEditor);
