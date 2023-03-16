import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = ITutorialData & {
  submitted: boolean
};

export default class AddTutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);//hidden
    this.onChangeInactive = this.onChangeInactive.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBankdetails = this.onChangeBankdetails.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      name: "",
      hidden: "",
      inactive: "",
      mode: "",
      phone: "",
      address: "",
      bankdetails: "",
      email: "",
      password: "",
      submitted: false
    };
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  //hidden
  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      hidden: e.target.value
    });
  }

  onChangeInactive(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      inactive: e.target.value
    });
  }

  onChangeMode(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      mode: e.target.value
    });
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeBankdetails(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      bankdetails: e.target.value
    });
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      password: e.target.value
    });
  }

  saveTutorial() {
    const data: ITutorialData = {
      name: this.state.name,
      hidden: this.state.hidden,
      inactive: this.state.inactive,
      mode: this.state.mode,
      phone: this.state.phone,
      address: this.state.address,
      bankdetails: this.state.bankdetails,
      email: this.state.email,
      password: this.state.password,
    };

    TutorialDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          hidden: response.data.hidden,
          inactive: response.data.inactive,
          mode: response.data.mode,
          phone: response.data.phone,
          address: response.data.address,
          bankdetails: response.data.bankdetails,
          email: response.data.email,
          password: response.data.password,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      hidden: "",
      inactive: "",
      mode: "",
      phone: "",
      address: "",
      bankdetails: "",
      email: "",
      password: "",
      submitted: false
    });
  }

  render() {
    const { submitted, name, hidden, inactive, mode, phone, address, bankdetails, email, password } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeTitle}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hidden">Hidden</label>
              <input
                type="text"
                className="form-control"
                id="hidden"
                required
                value={hidden}
                onChange={this.onChangeDescription}
                name="hidden"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inactive">Inactive</label>
              <input
                type="text"
                className="form-control"
                id="inactive"
                required
                value={inactive}
                onChange={this.onChangeInactive}
                name="inactive"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mode">Mode</label>
              <input
                type="text"
                className="form-control"
                id="mode"
                required
                value={mode}
                onChange={this.onChangeMode}
                name="mode"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bankdetails">Bank Details</label>
              <input
                type="text"
                className="form-control"
                id="bankdetails"
                required
                value={bankdetails}
                onChange={this.onChangeBankdetails}
                name="bankdetails"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={password}
                onChange={this.onChangePassword}
                name="password"
              />
            </div>


            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}