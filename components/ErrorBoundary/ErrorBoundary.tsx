import { Component, ErrorInfo, ReactNode } from 'react'
import reportToSlack from "@/utils/reportToSlack";

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportToSlack(error)
  }

  public render() {
    return this.props.children
  }
}

export default ErrorBoundary
