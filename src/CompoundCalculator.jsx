import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'

const CompoundCalculator = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validate);
  return (
    <div className="form-content-right">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Easily Calculate Compounding Interest</h1>
            <div className="form-inputs">
                <label htmlFor="initial" className="form-label">
                    Initial Investment
                </label>
                <input 
                type="text" 
                className="form-input" 
                name="initial" 
                placeholder="$0.00" 
                value={values.initial} 
                onChange={handleChange}>
                </input>
                {errors.initial ? <p>{errors.initial}</p> : <p>nothing</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="contribution" className="form-label">
                    Monthly Contribution
                </label>
                <input 
                type="text" 
                className="form-input" 
                name="contribution" 
                placeholder="$0.00" 
                value={values.contribution} 
                onChange={handleChange}>
                </input>
                {errors.contribution ? <p>{errors.contribution}</p> : <p>nothing</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="length" className="form-label">
                    Length in Years
                </label>
                <input type="text" className="form-input" name="length" placeholder="0" value={values.length} onChange={handleChange}></input>
                {errors.length ? <p>{errors.length}</p> : <p>nothing</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="interest" className="form-label">
                    Interest Rate
                </label>
                <input type="text" className="form-input" name="interest" placeholder="0.00%" value={values.interest} onChange={handleChange}></input>
                {errors.interest ? <p>{errors.interest}</p> : <p>nothing</p>}
            </div>
            <div className="form-inputs">
                <label htmlFor="compound" className="form-label">
                    Compound Frequency
                </label>
                <select value={values.compound} onChange={handleChange}> 
                  <option name="Daily">Daily</option>
                  <option name="Monthly">Monthly</option>
                  <option name="Quarterly">Quarterly</option>
                  <option name="Semi-Anually">Semi-Anually</option>
                  <option name="Anually">Anually</option>
                </select>
            </div>
            <button className="form-input-btn" type="submit">Calculate</button>
        </form>
    </div>
  )
}

export default CompoundCalculator