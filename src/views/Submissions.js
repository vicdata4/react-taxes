import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { getSubmissions, setSelectedSubmission, deleteSubmission, setFormData } from '../store/actions/taxes';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import store from '../store/store';

function Submissions({ list }) {
    let { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        store.dispatch(getSubmissions(id));
    }, []);

    function deleteSubmission_(id) {
        store.dispatch(deleteSubmission(id));
    }

    function setSubmission(item) {
        store.dispatch(setSelectedSubmission(item));
        history.push(`/taxes/${id}/submissions/edit`);
    }

    return (
        <div>
            <div>
                <Link to={`/taxes/${id}/form`}>Back</Link>
            </div>
            <h1>Submissions</h1>
            {list.map(item => {
                return (
                    <div key={item.id}>
                        {Object.entries(item).map((value, i) => {
                            return (
                                <div key={i}>
                                    <p>{value[0]}: {value[1]}</p>
                                </div>
                            )
                        })}
                        <div>
                            <button onClick={() => setSubmission(item)}>Edit</button>
                            <button onClick={() => deleteSubmission_(item.id)}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
const mapStateToProps = function (state) {
    return {
        list: state.taxes.submissionList
    }
}

export default connect(mapStateToProps)(Submissions);
