import React from "react";
import "../index.css";
import nanoid from "nanoid";
import { Button, Input, Checkbox, Form, Icon, Select } from "antd";
const { Option } = Select;

class HorizontalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    let { name, contract, position, id } = this.props.editable;

    this.state = {
      name: name ? name : "",
      contract: contract ? contract : false,
      position: position ? position : "",
      id: id ? id : "",
      nameValidation: false
    };
    this.validateName = this.validateName.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    let { name, contract, position, id } = this.props.editable;

    if (this.props.editable.id === prevProps.editable.id) {
      return null;
    } else {
      this.setState({
        name: name,
        contract: contract,
        position: position,
        id: id
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const addWorker = this.props.actions.addWorker;
    let { name, contract, position } = this.state;

    if (this.validateName()) {
      const person = {
        name: name,
        contract: contract,
        position: position,
        id: nanoid()
      };

      addWorker(person);

      this.setState({
        name: "",
        contract: true,
        position: "",
        id: ""
      });
    }
  }

  validateName() {
    if (this.state.name === "") {
      this.setState({
        nameValidation: true
      });
      return false;
    } else {
      return true;
    }
  }

  handleInputChange(e) {
    let target = e.target;
    let name = e.target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    if (this.state.name !== "") {
      this.setState({
        [name]: value,
        nameValidation: false
      });
    } else {
      this.setState({
        [name]: value
      });
    }
  }
  handleSelectChange(value) {
    this.setState({
      position: value,
      nameValidation: false
    });
  }

  render() {
    let { name, contract } = this.state;
    const options = this.props.categories;
    const changeName = this.props.actions.buttonName();
    const isJunior =
      this.state.position === "Junior Back-end developer" ||
      this.state.position === "Junior Front-end developer";

    return (
      <Form
        layout="inline"
        onSubmit={this.handleSubmit}
        className="form-container"
      >
        <div className="row1">
          <Form.Item>
            <Input
              size="large"
              placeholder="Worker's name"
              value={name}
              type="text"
              name="name"
              onChange={this.handleInputChange}
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            />
            <span
              className={
                this.state.nameValidation
                  ? "validation-field show"
                  : "validation-field hidden"
              }
            >
              This field is necessary
            </span>
          </Form.Item>

          <Form.Item>
            <div>
              <Select
                defaultValue="Choose workers position"
                size="large"
                onChange={this.handleSelectChange}
                style={{ width: 250 }}
              >
                {options.map(option => {
                  return (
                    <Option key={option.value} value={option.text}>
                      {option.text}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </Form.Item>
        </div>
        <div className="row2">
          <Form.Item>
            <Checkbox
              name="contract"
              onChange={this.handleInputChange}
              checked={isJunior ? false : contract}
              disabled={isJunior}
            >
              <span className="checkbox-descr">On Contract</span>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="submit">
              {changeName}
            </Button>
          </Form.Item>
        </div>
      </Form>
    );
  }
}
const WrappedHorizontalLoginForm = Form.create({ name: "horizontal_login" })(
  HorizontalLoginForm
);
export default WrappedHorizontalLoginForm;
