import {
    React
} from '../utils/general-imports'

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    componentDidCatch(err, info) {
        //  console.log("error", err, info)
        this.setState({ hasError: true });
    }

    render() {
        const { hasError } = this.state;
        return hasError ? (<h5>Some thing went wrong</h5>) : this.props.children;
    }
}

export default ErrorBoundary;