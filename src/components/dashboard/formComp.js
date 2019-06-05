import React from "react";
import { Field, reduxForm } from "redux-form";

class FormComp extends React.Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <div className="form">
      

      <form
        onSubmit={handleSubmit}
        className="pure-form pure-form-stacked my-form"
      >
        <div className="inputs">
        
        <div>
          <label>Weight in Pounds</label>
          <div>
            <Field
              name="weight"
              component="input"
              type="number"
              placeholder="Weight"
            />
          </div>
        </div>
        
        <div>
          <label>Age</label>
          <div>
            <Field
              name="age"
              component="input"
              type="number"
              placeholder="Age"
              
            />
          </div>
        </div>
        <div>
          <label>Height in Inches</label>
          <div>
            <Field name="height" component="select" className="height" placeholder="Height">
              <option />
              <option value="61">61</option>
              <option value="62">62</option>
              <option value="63">63</option>
              <option value="64">64</option>
              <option value="65">65</option>
              <option value="66">66</option>
              <option value="67">67</option>
              <option value="68">68</option>
              <option value="69">69</option>
              <option value="70">70</option>
              <option value="71">71</option>
              <option value="72">72</option>
              <option value="73">73</option>
              <option value="74">74</option>
              <option value="75">75</option>
              <option value="76">76</option>
              <option value="77">77</option>
              <option value="78">78</option>
            </Field>
          </div>
        </div>
        <div>
          <label>Activity Level</label>
          <div>
            <Field name="activity" component="select" className="height" placeholder="Activity">
              <option />
              <option value="Sedentary">Sedentary</option>
              <option value="Light">Lightly Active</option>
              <option value="Moderate">Moderately Active</option>
              <option value="Very">Very Active</option>
              <option value="Extreme">Extremely Active</option>
            </Field>
          </div>
        </div>
        <div>
          <label>Gender</label>
          <div className="gender">
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="male"
              />
              Male
            </label>
            <label>
              <Field
                name="gender"
                component="input"
                type="radio"
                value="female"
              />
              Female
            </label>
          </div>
        </div>
        <div className="buttons">
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
        </div>
      </form>
      </div>
    );
  }
}

FormComp = reduxForm({
  // a unique name for the form
  form: "contact"
})(FormComp);

export default FormComp;
