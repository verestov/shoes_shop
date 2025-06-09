import { App as AntdApp } from 'antd'
import { CartProvider } from '../CartContext'

const AppProvider = ({ children }) => {
	return (
		<AntdApp>
			<CartProvider>{children}</CartProvider>
		</AntdApp>
	)
}

export default AppProvider
