import React from 'react';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

function TaxForm({ parentCallback, formInfo, data }) {
  const { register, handleSubmit } = useForm();
  let { id } = useParams();

  const onSubmit = data_ => {
    if (data_) {
      data_.taxId = id;
      parentCallback(data_);
    }
  }

  return (
    <div>
      <form id="tax-form" onSubmit={handleSubmit(onSubmit)}>
        {formInfo.inputFields.map(item => {
          return (
            <div key={item.id}>
              <label>{item.label}</label>
              <input
                id={item.id}
                type={item.type}
                maxLength={item.maxLength}
                placeholder={item.placeholder}
                defaultValue={data ? data[item.id] : ''}
                {...register(item.id)}
                required/>
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
      {!data ? (<p><Link to={`/taxes/${id}/submissions`}>See submissions</Link></p>) : ''}
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    formInfo: state.taxes.formInfo
  }
}

export default connect(mapStateToProps)(TaxForm);