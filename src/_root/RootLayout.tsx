import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'

import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <div>
            <Topbar />
            <LeftSidebar />
            <section>
                <Outlet />
            </section>
        </div>
    )
}

export default RootLayout