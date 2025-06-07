import { App as AntdApp } from 'antd'

const AppProvider = ({ children }) => {
	return <AntdApp>{children}</AntdApp>
}

export default AppProvider
