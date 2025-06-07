import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import 'macro-css'
import { App as AntdApp, ConfigProvider } from 'antd'
import AppProvider from './components/Shared/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
	<ConfigProvider>
		<AppProvider>
			<App />
		</AppProvider>
	</ConfigProvider>
)
