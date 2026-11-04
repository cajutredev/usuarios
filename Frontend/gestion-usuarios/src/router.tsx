import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Index from './views/Index'

export default function Router() {
  return (
    <Routes>
        <Route element={<AppLayout />}>
            <Route path="/" element={<Index/>} index/>
        </Route>
    </Routes>
  )
}
