import { Component } from "react";

export default class Baitap extends Component {
    constructor() {
        super();
        this.state = {
            element1: 0,
            element2: 0,
            result: 0
        };
    }

    input1 = (e) => {
        this.setState({ element1: parseFloat(e.target.value) });
    }

    input2 = (e) => {
        this.setState({ element2: parseFloat(e.target.value) });
    }

    cong = () => {
        this.setState({ result: this.state.element1 + this.state.element2 });
    }

    tru = () => {
        this.setState({ result: this.state.element1 - this.state.element2 });
    }

    nhan = () => {
        this.setState({ result: this.state.element1 * this.state.element2 });
    }

    chia = () => {
        if (this.state.element2 !== 0) {
            this.setState({ result: this.state.element1 / this.state.element2 });
        } else {
            this.setState({ result: 'Lỗi do chia cho 0' });
        }
    }

    render() {
        return (
            <>
                <div>Kết quả: {this.state.result}</div>
                <input type="number" onChange={this.input1} />
                <input type="number" onChange={this.input2} />
                <button onClick={this.cong}>Cộng</button>
                <button onClick={this.tru}>Trừ</button>
                <button onClick={this.nhan}>Nhân</button>
                <button onClick={this.chia}>Chia</button>
            </>
        );
    }
}
